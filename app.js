
import './index.css'
import {cubeEnvMapComponent} from './components/cubemap-static'
import {cubeMapRealtimeComponent} from './components/cubemap-realtime'
import {responsiveImmersiveComponent} from './components/responsive-immersive'
import {
  portalCameraComponent, tapToPlacePortalComponent,
  promptFlowComponent, spinComponent,
} from './components/portal-components'

AFRAME.registerComponent('portal-camera', portalCameraComponent)
AFRAME.registerComponent('spin', spinComponent)

AFRAME.registerComponent('prompt-flow', promptFlowComponent)
AFRAME.registerComponent('tap-to-place-portal', tapToPlacePortalComponent)

AFRAME.registerComponent('cubemap-static', cubeEnvMapComponent)
AFRAME.registerComponent('cubemap-realtime', cubeMapRealtimeComponent)

AFRAME.registerComponent('responsive-immersive', responsiveImmersiveComponent)

AFRAME.registerComponent('auto-play-video', {
  schema: {
    video: {type: 'string'},
  },
  init() {
    const v = document.querySelector(this.data.video)
    v.play()
  },
})