const e=JSON.parse('{"key":"v-177e11dc","path":"/sidebar/sanfene/rocketmq.html","title":"面渣逆袭（RocketMQ面试题八股文）必看👍","lang":"zh-CN","frontmatter":{"title":"面渣逆袭（RocketMQ面试题八股文）必看👍","shortTitle":"面渣逆袭-RocketMQ","description":"面渣逆袭系列继续，两万字+三十图，详解RocketMQ面试高频题23 道，这次吊打面试官，我觉得稳了（手动 dog）","author":"三分恶","category":["面渣逆袭"],"tag":["面渣逆袭"],"head":[["meta",{"name":"keywords","content":"RocketMQ面试题,RocketMQ,面试题,八股文"}],["meta",{"property":"og:url","content":"https://javabetter.cn/sidebar/sanfene/rocketmq.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"面渣逆袭（RocketMQ面试题八股文）必看👍"}],["meta",{"property":"og:description","content":"面渣逆袭系列继续，两万字+三十图，详解RocketMQ面试高频题23 道，这次吊打面试官，我觉得稳了（手动 dog）"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-24T02:39:04.000Z"}],["meta",{"property":"article:author","content":"三分恶"}],["meta",{"property":"article:tag","content":"面渣逆袭"}],["meta",{"property":"article:modified_time","content":"2023-04-24T02:39:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"面渣逆袭（RocketMQ面试题八股文）必看👍\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-24T02:39:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"三分恶\\"}]}"]]},"headers":[{"level":2,"title":"基础","slug":"基础","link":"#基础","children":[{"level":3,"title":"1.为什么要使用消息队列呢？","slug":"_1-为什么要使用消息队列呢","link":"#_1-为什么要使用消息队列呢","children":[]},{"level":3,"title":"2.为什么要选择RocketMQ?","slug":"_2-为什么要选择rocketmq","link":"#_2-为什么要选择rocketmq","children":[]},{"level":3,"title":"3.RocketMQ有什么优缺点？","slug":"_3-rocketmq有什么优缺点","link":"#_3-rocketmq有什么优缺点","children":[]},{"level":3,"title":"4.消息队列有哪些消息模型？","slug":"_4-消息队列有哪些消息模型","link":"#_4-消息队列有哪些消息模型","children":[]},{"level":3,"title":"5.那RocketMQ的消息模型呢？","slug":"_5-那rocketmq的消息模型呢","link":"#_5-那rocketmq的消息模型呢","children":[]},{"level":3,"title":"6.消息的消费模式了解吗？","slug":"_6-消息的消费模式了解吗","link":"#_6-消息的消费模式了解吗","children":[]},{"level":3,"title":"7.RoctetMQ基本架构了解吗？","slug":"_7-roctetmq基本架构了解吗","link":"#_7-roctetmq基本架构了解吗","children":[]},{"level":3,"title":"8.那能介绍一下这四部分吗？","slug":"_8-那能介绍一下这四部分吗","link":"#_8-那能介绍一下这四部分吗","children":[]}]},{"level":2,"title":"进阶","slug":"进阶","link":"#进阶","children":[{"level":3,"title":"9.如何保证消息的可用性/可靠性/不丢失呢？","slug":"_9-如何保证消息的可用性-可靠性-不丢失呢","link":"#_9-如何保证消息的可用性-可靠性-不丢失呢","children":[]},{"level":3,"title":"10.如何处理消息重复的问题呢？","slug":"_10-如何处理消息重复的问题呢","link":"#_10-如何处理消息重复的问题呢","children":[]},{"level":3,"title":"11.怎么处理消息积压？","slug":"_11-怎么处理消息积压","link":"#_11-怎么处理消息积压","children":[]},{"level":3,"title":"12.顺序消息如何实现？","slug":"_12-顺序消息如何实现","link":"#_12-顺序消息如何实现","children":[]},{"level":3,"title":"13.如何实现消息过滤？","slug":"_13-如何实现消息过滤","link":"#_13-如何实现消息过滤","children":[]},{"level":3,"title":"14.延时消息了解吗？","slug":"_14-延时消息了解吗","link":"#_14-延时消息了解吗","children":[]},{"level":3,"title":"15.怎么实现分布式消息事务的？半消息？","slug":"_15-怎么实现分布式消息事务的-半消息","link":"#_15-怎么实现分布式消息事务的-半消息","children":[]},{"level":3,"title":"16.死信队列知道吗？","slug":"_16-死信队列知道吗","link":"#_16-死信队列知道吗","children":[]},{"level":3,"title":"17.如何保证RocketMQ的高可用？","slug":"_17-如何保证rocketmq的高可用","link":"#_17-如何保证rocketmq的高可用","children":[]}]},{"level":2,"title":"原理","slug":"原理","link":"#原理","children":[{"level":3,"title":"18.说一下RocketMQ的整体工作流程？","slug":"_18-说一下rocketmq的整体工作流程","link":"#_18-说一下rocketmq的整体工作流程","children":[]},{"level":3,"title":"19.为什么RocketMQ不使用Zookeeper作为注册中心呢？","slug":"_19-为什么rocketmq不使用zookeeper作为注册中心呢","link":"#_19-为什么rocketmq不使用zookeeper作为注册中心呢","children":[]},{"level":3,"title":"20.Broker是怎么保存数据的呢？","slug":"_20-broker是怎么保存数据的呢","link":"#_20-broker是怎么保存数据的呢","children":[]},{"level":3,"title":"21.说说RocketMQ怎么对文件进行读写的？","slug":"_21-说说rocketmq怎么对文件进行读写的","link":"#_21-说说rocketmq怎么对文件进行读写的","children":[]},{"level":3,"title":"22.消息刷盘怎么实现的呢？","slug":"_22-消息刷盘怎么实现的呢","link":"#_22-消息刷盘怎么实现的呢","children":[]},{"level":3,"title":"22.能说下 RocketMQ 的负载均衡是如何实现的？","slug":"_22-能说下-rocketmq-的负载均衡是如何实现的","link":"#_22-能说下-rocketmq-的负载均衡是如何实现的","children":[]},{"level":3,"title":"23.RocketMQ消息长轮询了解吗？","slug":"_23-rocketmq消息长轮询了解吗","link":"#_23-rocketmq消息长轮询了解吗","children":[]}]}],"git":{"createdTime":1658194347000,"updatedTime":1682303944000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":9},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":2}]},"readingTime":{"minutes":41.54,"words":12463},"filePathRelative":"sidebar/sanfene/rocketmq.md","localizedDate":"2022年7月19日","excerpt":"<blockquote>\\n<p>图文详解 RocketMQ 面试高频题，这次吊打面试官，我觉得稳了（手动 dog）。整理：沉默王二，戳<a href=\\"https://mp.weixin.qq.com/s/N6wq52pBGh8xkS-5uRcO2g\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">转载链接</a>，作者：三分恶，戳<a href=\\"https://mp.weixin.qq.com/s/IvBt3tB_IWZgPjKv5WGS4A\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">原文链接</a>。</p>\\n</blockquote>"}');export{e as data};
