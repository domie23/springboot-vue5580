import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import chengji from '@/views/modules/chengji/list'
    import dictionary from '@/views/modules/dictionary/list'
    import forum from '@/views/modules/forum/list'
    import huoodngbaoming from '@/views/modules/huoodngbaoming/list'
    import jiaoshi from '@/views/modules/jiaoshi/list'
    import kecheng from '@/views/modules/kecheng/list'
    import news from '@/views/modules/news/list'
    import qingjia from '@/views/modules/qingjia/list'
    import xuanke from '@/views/modules/xuanke/list'
    import yonghu from '@/views/modules/yonghu/list'
    import yuanxiao from '@/views/modules/yuanxiao/list'
    import ziliao from '@/views/modules/ziliao/list'
    import config from '@/views/modules/config/list'
    import dictionaryChengji from '@/views/modules/dictionaryChengji/list'
    import dictionaryForum from '@/views/modules/dictionaryForum/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryHuoodngbaoming from '@/views/modules/dictionaryHuoodngbaoming/list'
    import dictionaryHuoodngbaomingYesno from '@/views/modules/dictionaryHuoodngbaomingYesno/list'
    import dictionaryJiaoshi from '@/views/modules/dictionaryJiaoshi/list'
    import dictionaryKecheng from '@/views/modules/dictionaryKecheng/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionaryQingjia from '@/views/modules/dictionaryQingjia/list'
    import dictionaryQingjiaYesno from '@/views/modules/dictionaryQingjiaYesno/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryZiliao from '@/views/modules/dictionaryZiliao/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryChengji',
        name: '成绩类型',
        component: dictionaryChengji
    }
    ,{
        path: '/dictionaryForum',
        name: '帖子类型',
        component: dictionaryForum
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryHuoodngbaoming',
        name: '活动类型',
        component: dictionaryHuoodngbaoming
    }
    ,{
        path: '/dictionaryHuoodngbaomingYesno',
        name: '报名状态',
        component: dictionaryHuoodngbaomingYesno
    }
    ,{
        path: '/dictionaryJiaoshi',
        name: '教师类型',
        component: dictionaryJiaoshi
    }
    ,{
        path: '/dictionaryKecheng',
        name: '课程类型',
        component: dictionaryKecheng
    }
    ,{
        path: '/dictionaryNews',
        name: '公告类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionaryQingjia',
        name: '请假类型',
        component: dictionaryQingjia
    }
    ,{
        path: '/dictionaryQingjiaYesno',
        name: '申请状态',
        component: dictionaryQingjiaYesno
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryZiliao',
        name: '资料类型',
        component: dictionaryZiliao
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/chengji',
        name: '学生成绩',
        component: chengji
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/forum',
        name: '论坛',
        component: forum
      }
    ,{
        path: '/huoodngbaoming',
        name: '活动报名',
        component: huoodngbaoming
      }
    ,{
        path: '/jiaoshi',
        name: '教师',
        component: jiaoshi
      }
    ,{
        path: '/kecheng',
        name: '课程信息',
        component: kecheng
      }
    ,{
        path: '/news',
        name: '公告信息',
        component: news
      }
    ,{
        path: '/qingjia',
        name: '学生请假',
        component: qingjia
      }
    ,{
        path: '/xuanke',
        name: '选课信息',
        component: xuanke
      }
    ,{
        path: '/yonghu',
        name: '学生',
        component: yonghu
      }
    ,{
        path: '/yuanxiao',
        name: '院校展示',
        component: yuanxiao
      }
    ,{
        path: '/ziliao',
        name: '公共资料',
        component: ziliao
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
