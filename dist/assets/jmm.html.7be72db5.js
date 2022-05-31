const e={key:"v-31e3344a",path:"/thread/jmm.html",title:"\u5168\u9762\u7406\u89E3Java\u7684\u5185\u5B58\u6A21\u578B\uFF08JMM\uFF09",lang:"zh-CN",frontmatter:{category:["Java\u6838\u5FC3","\u5E76\u53D1\u7F16\u7A0B"],tag:["Java"],summary:"\u5168\u9762\u7406\u89E3Java\u7684\u5185\u5B58\u6A21\u578B\uFF08JMM\uFF09 \u5728\u9762\u8BD5\u4E2D\uFF0C\u9762\u8BD5\u5B98\u7ECF\u5E38\u559C\u6B22\u95EE\uFF1A\u300E\u8BF4\u8BF4\u4EC0\u4E48\u662FJava\u5185\u5B58\u6A21\u578B(JMM)\uFF1F\u300F \u9762\u8BD5\u8005\u5185\u5FC3\u72C2\u559C\uFF0C\u8FD9\u9898\u521A\u80CC\u8FC7\uFF1A\u300EJava\u5185\u5B58\u4E3B\u8981\u5206\u4E3A\u4E94\u5927\u5757\uFF1A\u5806\u3001\u65B9\u6CD5\u533A\u3001\u865A\u62DF\u673A\u6808\u3001\u672C\u5730\u65B9\u6CD5\u6808\u3001PC\u5BC4\u5B58\u5668\uFF0Cbalabala\u2026\u2026\u300F \u9762\u8BD5\u5B98\u4F1A\u5FC3\u4E00\u7B11\uFF0C\u9732\u51FA\u4E00\u9053\u5149\u8292\uFF1A\u300E\u597D\u4E86\uFF0C\u4ECA\u5929\u7684\u9762\u8BD5\u5148\u5230\u8FD9\u91CC\u4E86\uFF0C\u56DE\u53BB\u7B49\u901A\u77E5\u5427\u300F \u4E00\u822C\u542C\u5230\u7B49\u901A\u77E5\u8FD9\u53E5\u8BDD\uFF0C\u8FD9\u573A\u9762\u8BD5\u5927\u6982\u7387\u5C31\u662F\u51C9\u51C9\u4E86",head:[["meta",{property:"og:url",content:"https://tobebetterjavaer.com/thread/jmm.html"}],["meta",{property:"og:site_name",content:"Java \u7A0B\u5E8F\u5458\u8FDB\u9636\u4E4B\u8DEF"}],["meta",{property:"og:title",content:"\u5168\u9762\u7406\u89E3Java\u7684\u5185\u5B58\u6A21\u578B\uFF08JMM\uFF09"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-05-12T08:24:21.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:tag",content:"Java"}],["meta",{property:"article:modified_time",content:"2022-05-12T08:24:21.000Z"}]]},excerpt:"",headers:[{level:2,title:"\u5E76\u53D1\u7F16\u7A0B\u6A21\u578B\u7684\u4E24\u4E2A\u5173\u952E\u95EE\u9898",slug:"\u5E76\u53D1\u7F16\u7A0B\u6A21\u578B\u7684\u4E24\u4E2A\u5173\u952E\u95EE\u9898",children:[]},{level:2,title:"Java\u5185\u5B58\u6A21\u578B\u7684\u62BD\u8C61\u7ED3\u6784",slug:"java\u5185\u5B58\u6A21\u578B\u7684\u62BD\u8C61\u7ED3\u6784",children:[{level:3,title:"\u8FD0\u884C\u65F6\u5185\u5B58\u7684\u5212\u5206",slug:"\u8FD0\u884C\u65F6\u5185\u5B58\u7684\u5212\u5206",children:[]},{level:3,title:"\u65E2\u7136\u5806\u662F\u5171\u4EAB\u7684\uFF0C\u4E3A\u4EC0\u4E48\u5728\u5806\u4E2D\u4F1A\u6709\u5185\u5B58\u4E0D\u53EF\u89C1\u95EE\u9898\uFF1F",slug:"\u65E2\u7136\u5806\u662F\u5171\u4EAB\u7684-\u4E3A\u4EC0\u4E48\u5728\u5806\u4E2D\u4F1A\u6709\u5185\u5B58\u4E0D\u53EF\u89C1\u95EE\u9898",children:[]},{level:3,title:"JMM\u4E0EJava\u5185\u5B58\u533A\u57DF\u5212\u5206\u7684\u533A\u522B\u4E0E\u8054\u7CFB",slug:"jmm\u4E0Ejava\u5185\u5B58\u533A\u57DF\u5212\u5206\u7684\u533A\u522B\u4E0E\u8054\u7CFB",children:[]}]},{level:2,title:"\u4EC0\u4E48\u662F\u91CD\u6392\u5E8F\uFF1F",slug:"\u4EC0\u4E48\u662F\u91CD\u6392\u5E8F",children:[]},{level:2,title:"\u987A\u5E8F\u4E00\u81F4\u6027\u6A21\u578B\u4E0EJMM\u7684\u4FDD\u8BC1",slug:"\u987A\u5E8F\u4E00\u81F4\u6027\u6A21\u578B\u4E0Ejmm\u7684\u4FDD\u8BC1",children:[{level:3,title:"\u6570\u636E\u7ADE\u4E89\u4E0E\u987A\u5E8F\u4E00\u81F4\u6027",slug:"\u6570\u636E\u7ADE\u4E89\u4E0E\u987A\u5E8F\u4E00\u81F4\u6027",children:[]},{level:3,title:"\u987A\u5E8F\u4E00\u81F4\u6027\u6A21\u578B",slug:"\u987A\u5E8F\u4E00\u81F4\u6027\u6A21\u578B",children:[]},{level:3,title:"JMM\u4E2D\u540C\u6B65\u7A0B\u5E8F\u7684\u987A\u5E8F\u4E00\u81F4\u6027\u6548\u679C",slug:"jmm\u4E2D\u540C\u6B65\u7A0B\u5E8F\u7684\u987A\u5E8F\u4E00\u81F4\u6027\u6548\u679C",children:[]},{level:3,title:"JMM\u4E2D\u672A\u540C\u6B65\u7A0B\u5E8F\u7684\u987A\u5E8F\u4E00\u81F4\u6027\u6548\u679C",slug:"jmm\u4E2D\u672A\u540C\u6B65\u7A0B\u5E8F\u7684\u987A\u5E8F\u4E00\u81F4\u6027\u6548\u679C",children:[]}]},{level:2,title:"happens-before",slug:"happens-before",children:[{level:3,title:"\u4EC0\u4E48\u662Fhappens-before?",slug:"\u4EC0\u4E48\u662Fhappens-before",children:[]},{level:3,title:"\u5929\u7136\u7684happens-before\u5173\u7CFB",slug:"\u5929\u7136\u7684happens-before\u5173\u7CFB",children:[]}]}],git:{createdTime:1648037338e3,updatedTime:1652343861e3,contributors:[{name:"itwanger",email:"www.qing_gee@163.com",commits:4},{name:"\u6C89\u9ED8\u738B\u4E8C",email:"www.qing_gee@163.com",commits:1}]},readingTime:{minutes:16.73,words:5018},filePathRelative:"thread/jmm.md"};export{e as data};
