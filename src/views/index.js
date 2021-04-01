// import business from '@/views/business/router.config'

// import eventpush from '@/views/eventpush/router.config'

import model from '@/views/model-manage/router.config'
import modelAssociation from '@/views/model-association/router.config'
import modelTopology from '@/views/model-topology/router.config'
// import resource from '@/views/resource/router.config'
// import generalModel from '@/views/general-model/router.config'

// import resourceManagement from '@/views/resource-manage/router.config'

// import cloudArea from '@/views/cloud-area/router.config'
// import cloudAccount from '@/views/cloud-account/router.config'
// import cloudResource from '@/views/cloud-resource/router.config'

import statusPermission from '@/views/status/permission'
import statusError from '@/views/status/error'

const flatternViews = views => {
    const flatterned = []
    views.forEach(view => {
        if (Array.isArray(view)) {
            flatterned.push(...view)
        } else {
            flatterned.push(view)
        }
    })
    return flatterned
}

export const injectStatusComponents = (views, status = ['permission', 'error']) => {
    views.forEach(view => {
        view.components = {
            default: view.component,
            permission: statusPermission,
            error: statusError
        }
    })
    return views
}

// export const resourceViews = injectStatusComponents(flatternViews([
//     business,
//     resource,
//     generalModel,
//     eventpush,
//     resourceManagement,
//     cloudArea,
//     cloudAccount,
//     cloudResource
// ]))

export const modelViews = injectStatusComponents(flatternViews([
    model,
    modelAssociation,
    modelTopology
]))

export default {
    // ...resourceViews,
    ...modelViews
}
