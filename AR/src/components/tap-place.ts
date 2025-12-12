declare const XR8ECS: any
const ecs = XR8ECS

ecs.registerComponent({
  name: 'Tap Place',
  schema: {
    tattooPrefab: ecs.eid,
  },

  stateMachine: ({world, eid, schemaAttribute}: any) => {
    const toCooldown = ecs.defineTrigger()

    ecs.defineState('default')
      .initial()
      .listen(eid, ecs.input.SCREEN_TOUCH_START, (e: any) => {
        const prefab = schemaAttribute.get(eid).tattooPrefab
        if (!prefab) return

        const { worldPosition } = e.data

        const tattoo = world.createEntity(prefab)

        // Position et rotation fixe (nouvelle API 8thWall)
        ecs.Transform.set(world, tattoo, {
          position: worldPosition,
          rotation: { x: 0, y: 0, z: 0, w: 1 },
        })

        // Animation scale
        ecs.ScaleAnimation.set(world, tattoo, {
          fromX: 0.01, fromY: 0.01, fromZ: 0.01,
          toX: 0.2,  toY: 0.2,  toZ: 0.2,
          duration: 400,
          loop: false,
          easeOut: true,
          easingFunction: 'Quadratic',
        })

        toCooldown.trigger()
      })
      .onTrigger(toCooldown, 'cooldown')

    ecs.defineState('cooldown').wait(500, 'default')
  },
})
