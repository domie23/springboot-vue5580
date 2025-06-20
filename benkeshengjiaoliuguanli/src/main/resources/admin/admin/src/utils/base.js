const base = {
    get() {
        return {
            url : "http://localhost:8080/benkeshengjiaoliuguanli/",
            name: "benkeshengjiaoliuguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/benkeshengjiaoliuguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "本科生交流培养管理平台"
        } 
    }
}
export default base
