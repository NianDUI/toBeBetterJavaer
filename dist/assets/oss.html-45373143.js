const e=JSON.parse('{"key":"v-1e34c521","path":"/springboot/oss.html","title":"崩溃！我带的实习生竟然把图片直接存到了服务器上！","lang":"zh-CN","frontmatter":{"category":["Java企业级开发"],"tag":["Spring Boot"],"description":"崩溃！我带的实习生竟然把图片直接存到了服务器上！ 小二是新来的实习生，作为技术 leader，我给他安排了一个非常简单的练手任务，把前端 markdown 编辑器里上传的图片保存到服务器端，结果他真的就把图片直接保存到了服务器上，这下可把我气坏了，就不能搞个对象存储服务，比如说 OSS、MinIO？ 他理直气壮地反驳道：“谁让你不讲清楚，我去找老板把你开掉！”我瞬间就怂了，说，“来来来，我手把手教你怎么把图片保存到 OSS 上，好不好？” “不用了，还是我来教你吧。”小二非常自信，下面是他在 Spring Boot 应用中整合 OSS 做的记录。","head":[["meta",{"property":"og:url","content":"https://javabetter.cn/springboot/oss.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"崩溃！我带的实习生竟然把图片直接存到了服务器上！"}],["meta",{"property":"og:description","content":"崩溃！我带的实习生竟然把图片直接存到了服务器上！ 小二是新来的实习生，作为技术 leader，我给他安排了一个非常简单的练手任务，把前端 markdown 编辑器里上传的图片保存到服务器端，结果他真的就把图片直接保存到了服务器上，这下可把我气坏了，就不能搞个对象存储服务，比如说 OSS、MinIO？ 他理直气壮地反驳道：“谁让你不讲清楚，我去找老板把你开掉！”我瞬间就怂了，说，“来来来，我手把手教你怎么把图片保存到 OSS 上，好不好？” “不用了，还是我来教你吧。”小二非常自信，下面是他在 Spring Boot 应用中整合 OSS 做的记录。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-26T14:16:41.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"Spring Boot"}],["meta",{"property":"article:modified_time","content":"2022-12-26T14:16:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"崩溃！我带的实习生竟然把图片直接存到了服务器上！\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-12-26T14:16:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":3,"title":"一、开通 OSS","slug":"一、开通-oss","link":"#一、开通-oss","children":[]},{"level":3,"title":"二、整合 OSS","slug":"二、整合-oss","link":"#二、整合-oss","children":[]},{"level":3,"title":"三、拉取前端代码来测试 OSS 上传接口","slug":"三、拉取前端代码来测试-oss-上传接口","link":"#三、拉取前端代码来测试-oss-上传接口","children":[]},{"level":3,"title":"四、利用 OSS 进行自动转链","slug":"四、利用-oss-进行自动转链","link":"#四、利用-oss-进行自动转链","children":[]},{"level":3,"title":"五、小结","slug":"五、小结","link":"#五、小结","children":[]}],"git":{"createdTime":1647934206000,"updatedTime":1672064201000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":4}]},"readingTime":{"minutes":5.02,"words":1506},"filePathRelative":"springboot/oss.md","localizedDate":"2022年3月22日","excerpt":"<h1> 崩溃！我带的实习生竟然把图片直接存到了服务器上！</h1>\\n<p>小二是新来的实习生，作为技术 leader，我给他安排了一个非常简单的练手任务，把前端 markdown 编辑器里上传的图片保存到服务器端，结果他真的就把图片直接保存到了服务器上，这下可把我气坏了，就不能搞个对象存储服务，比如说 OSS、MinIO？</p>\\n<p>他理直气壮地反驳道：“谁让你不讲清楚，我去找老板把你开掉！”我瞬间就怂了，说，“来来来，我手把手教你怎么把图片保存到 OSS 上，好不好？”</p>\\n<p>“不用了，还是我来教你吧。”小二非常自信，下面是他在 Spring Boot 应用中整合 OSS 做的记录。</p>","autoDesc":true}');export{e as data};
