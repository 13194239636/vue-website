import Vue from 'vue'
import Router from 'vue-router'
import detail from '@/components/detail'
import detailCount from '@/components/detail_count'
import detailForecast from '@/components/detail_forecast'
import detailPublish from '@/components/detail_publish'
import detailAnalysic from '@/components/detail_analysic'
import my from '@/components/my'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/'
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail,
      children: [
        {
          path: '/detail/count',
          name: 'count',
          component: detailCount
        },
        {
          path: '/detail/forecast',
          name: 'forecast',
          component: detailForecast
        },
        {
          path: '/detail/publish',
          name: 'publish',
          component: detailPublish
        },
        {
          path: '/detail/analysic',
          name: 'analysic',
          component: detailAnalysic
        }
      ]
    },
    {
      path: '/my',
      name: 'my',
      component: my
    }
  ],
  scrollBehavior (to, form, savePosition) {
    return {x: 0, y: 0}
  }
})
