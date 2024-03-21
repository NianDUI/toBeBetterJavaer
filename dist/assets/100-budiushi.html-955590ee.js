const t=JSON.parse('{"key":"v-20db0618","path":"/mq/100-budiushi.html","title":"MQ：怎么确保消息100%不丢失？","lang":"zh-CN","frontmatter":{"category":["求职面试"],"tag":["面试题集合"],"description":"MQ：怎么确保消息100%不丢失？ 面试官在面试候选人时，如果发现候选人的简历中写了在项目中使用了 MQ 技术（如 Kafka、RabbitMQ、RocketMQ），基本都会抛出一个问题：在使用 MQ 的时候，怎么确保消息 100% 不丢失？ 这个问题在实际工作中很常见，既能考察候选者对于 MQ 中间件技术的掌握程度，又能很好地区分候选人的能力水平。接下来，我们就从这个问题出发，探讨你应该掌握的基础知识和答题思路，以及延伸的面试考点。 案例背景 以京东系统为例，用户在购买商品时，通常会选择用京豆抵扣一部分的金额，在这个过程中，交易服务和京豆服务通过 MQ 消息队列进行通信。在下单时，交易服务发送“扣减账户 X 100 个京豆”的消息给 MQ 消息队列，而京豆服务则在消费端消费这条命令，实现真正的扣减操作。","head":[["meta",{"property":"og:url","content":"https://javabetter.cn/mq/100-budiushi.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"MQ：怎么确保消息100%不丢失？"}],["meta",{"property":"og:description","content":"MQ：怎么确保消息100%不丢失？ 面试官在面试候选人时，如果发现候选人的简历中写了在项目中使用了 MQ 技术（如 Kafka、RabbitMQ、RocketMQ），基本都会抛出一个问题：在使用 MQ 的时候，怎么确保消息 100% 不丢失？ 这个问题在实际工作中很常见，既能考察候选者对于 MQ 中间件技术的掌握程度，又能很好地区分候选人的能力水平。接下来，我们就从这个问题出发，探讨你应该掌握的基础知识和答题思路，以及延伸的面试考点。 案例背景 以京东系统为例，用户在购买商品时，通常会选择用京豆抵扣一部分的金额，在这个过程中，交易服务和京豆服务通过 MQ 消息队列进行通信。在下单时，交易服务发送“扣减账户 X 100 个京豆”的消息给 MQ 消息队列，而京豆服务则在消费端消费这条命令，实现真正的扣减操作。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-26T14:16:41.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"面试题集合"}],["meta",{"property":"article:modified_time","content":"2022-12-26T14:16:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MQ：怎么确保消息100%不丢失？\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-12-26T14:16:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":3,"title":"案例背景","slug":"案例背景","link":"#案例背景","children":[]},{"level":3,"title":"案例分析","slug":"案例分析","link":"#案例分析","children":[]},{"level":3,"title":"案例解答","slug":"案例解答","link":"#案例解答","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1646730916000,"updatedTime":1672064201000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":7},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":1}]},"readingTime":{"minutes":11.8,"words":3540},"filePathRelative":"mq/100-budiushi.md","localizedDate":"2022年3月8日","excerpt":"<h1> MQ：怎么确保消息100%不丢失？</h1>\\n<p>面试官在面试候选人时，如果发现候选人的简历中写了在项目中使用了 MQ 技术（如 Kafka、RabbitMQ、RocketMQ），基本都会抛出一个问题：在使用 MQ 的时候，怎么确保消息 100% 不丢失？</p>\\n<p>这个问题在实际工作中很常见，既能考察候选者对于 MQ 中间件技术的掌握程度，又能很好地区分候选人的能力水平。接下来，我们就从这个问题出发，探讨你应该掌握的基础知识和答题思路，以及延伸的面试考点。</p>\\n<h3> 案例背景</h3>\\n<p>以京东系统为例，用户在购买商品时，通常会选择用京豆抵扣一部分的金额，在这个过程中，交易服务和京豆服务通过 MQ 消息队列进行通信。在下单时，交易服务发送“扣减账户 X 100 个京豆”的消息给 MQ 消息队列，而京豆服务则在消费端消费这条命令，实现真正的扣减操作。</p>","autoDesc":true}');export{t as data};