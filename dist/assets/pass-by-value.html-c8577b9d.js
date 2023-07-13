import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c,a as n,d as a,b as e,e as i}from"./app-1c5b5ce3.js";const l={},u=n("h1",{id:"_13-6-java是值传递还是引用传递",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_13-6-java是值传递还是引用传递","aria-hidden":"true"},"#"),a(" 13.6 Java是值传递还是引用传递？")],-1),r=n("p",null,"“哥，说说 Java 到底是值传递还是引用传递吧？”三妹一脸的困惑，看得出来她被这个问题折磨得不轻。",-1),d={href:"https://javabetter.cn/basic-grammar/basic-data-type.html",target:"_blank",rel:"noopener noreferrer"},k={href:"https://javabetter.cn/xuexiluxian/c.html",target:"_blank",rel:"noopener noreferrer"},v=i(`<p>Java 继承了 C 语言这一特性，因此 Java 是按照值来传递的。</p><p>接下来，我们必须得搞清楚，到底什么是值传递（pass by value），什么是引用传递（pass by reference），否则，讨论 Java 到底是值传递还是引用传递就显得毫无意义。</p><p>当一个参数按照值的方式在两个方法之间传递时，调用者和被调用者其实是用的两个不同的变量——被调用者中的变量（原始值）是调用者中变量的一份拷贝，对它们当中的任何一个变量修改都不会影响到另外一个变量，据说 Fortran 语言是通过引用传递的。</p><p>“Fortran 语言？”三妹睁大了双眼，似乎听见了什么新的名词。</p><p>“是的，Fortran 语言，1957 年由 IBM 公司开发，是世界上第一个被正式采用并流传至今的高级编程语言。”</p><p>当一个参数按照引用传递的方式在两个方法之间传递时，调用者和被调用者其实用的是同一个变量，当该变量被修改时，双方都是可见的。</p><p>“我们之所以容易搞不清楚 Java 到底是值传递还是引用传递，主要是因为 Java 中的两类数据类型的叫法容易引发误会，比如说 int 是基本类型，说它是值传递的，我们就很容易理解；但对于引用类型，比如说 String，说它也是值传递的时候，我们就容易弄不明白。”</p><p>我们来看看基本数据类型和引用数据类型之间的差别。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">&quot;二哥&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>age 是基本类型，值就保存在变量中，而 name 是引用类型，变量中保存的是对象的地址。一般称这种变量为对象的引用，引用存放在栈中，而对象存放在堆中。</p><p>这里说的栈和堆，是指内存中的一块区域，和数据结构中的栈和堆不一样。栈是由编译器自动分配释放的，所以适合存放编译期就确定生命周期的数据；而堆中存放的数据，编译器是不需要知道生命周期的，创建后的回收工作由垃圾收集器来完成。</p><p>“画幅图。”</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/core-points/pass-by-value-01.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>当用 = 赋值运算符改变 age 和 name 的值时。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>age <span class="token operator">=</span> <span class="token number">16</span><span class="token punctuation">;</span>
name <span class="token operator">=</span> <span class="token string">&quot;三妹&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>对于基本类型 age，赋值运算符会直接改变变量的值，原来的值被覆盖。</p><p>对于引用类型 name，赋值运算符会改变对象引用中保存的地址，原来的地址被覆盖，但原来的对象不会被覆盖。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/core-points/pass-by-value-02.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>“三妹，注意听，接下来，我们来说说基本数据类型的参数传递。”</p><p>Java 有 8 种基本数据类型，分别是 int、long、byte、short、float、double 、char 和 boolean，就拿 int 类型来举例吧。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">PrimitiveTypeDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>
        <span class="token function">modify</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">modify</span><span class="token punctuation">(</span><span class="token keyword">int</span> age1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        age1 <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1）<code>main()</code> 方法中的 age 为基本类型，所以它的值 18 直接存储在变量中。</p><p>2）调用 <code>modify()</code> 方法的时候，将会把 age 的值 18 复制给形参 age1。</p><p>3）<code>modify()</code> 方法中，对 age1 做出了修改。</p><p>4）回到 <code>main()</code> 方法中，age 的值仍然为 18，并没有发生改变。</p><p>如果我们想让 age 的值发生改变，就需要这样做。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">PrimitiveTypeDemo1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>
        age <span class="token operator">=</span> <span class="token function">modify</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">modify</span><span class="token punctuation">(</span><span class="token keyword">int</span> age1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        age1 <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> age1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第一，让 <code>modify()</code> 方法有返回值；</p><p>第二，使用赋值运算符重新对 age 进行赋值。</p><p>“好了，再来说说引用类型的参数传递。”</p><p>就以 String 为例吧。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">ReferenceTypeDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">&quot;二哥&quot;</span><span class="token punctuation">;</span>
        <span class="token function">modify</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">modify</span><span class="token punctuation">(</span><span class="token class-name">String</span> name1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        name1 <span class="token operator">=</span> <span class="token string">&quot;三妹&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在调用 <code>modify()</code> 方法的时候，形参 name1 复制了 name 的地址，指向的是堆中“二哥”的位置。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/core-points/pass-by-value-03.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>当 <code>modify()</code> 方法调用结束后，改变了形参 name1 的地址，但 <code>main()</code> 方法中 name 并没有发生改变。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/core-points/pass-by-value-04.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>总结：</p><ul><li>Java 中的参数传递是按值传递的。</li><li>如果参数是基本类型，传递的是基本类型的字面量值的拷贝。</li><li>如果参数是引用类型，传递的是引用的对象在堆中地址的拷贝。</li></ul><p>“好了，三妹，今天的学习就到这吧。”</p><hr>`,40),m={href:"https://github.com/itwanger/toBeBetterJavaer",target:"_blank",rel:"noopener noreferrer"},g={href:"https://javabetter.cn/overview/",target:"_blank",rel:"noopener noreferrer"},b=n("p",null,[a("微信搜 "),n("strong",null,"沉默王二"),a(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),n("strong",null,"222"),a(" 即可免费领取。")],-1),f=n("figure",null,[n("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1);function y(h,_){const s=p("ExternalLinkIcon");return o(),c("div",null,[u,r,n("p",null,[a("“说实在的，我在一开始学 Java 的时候也被这个问题折磨得够呛，总以为"),n("a",d,[a("基本数据类型"),e(s)]),a("在传参的时候是值传递，而引用类型是引用传递。”我对三妹袒露了心声，为的就是让她不再那么焦虑，她哥当年也是这么过来的。")]),n("p",null,[n("a",k,[a("C 语言"),e(s)]),a("是很多编程语言的母胎，包括 Java，那么对于 C 语言来说，所有的方法参数都是“通过值”传递的，也就是说，传递给被调用方法的参数值存放在临时变量中，而不是存放在原来的变量中。这就意味着，被调用的方法不能修改调用方法中变量的值，而只能修改其私有变量的临时副本的值。")]),v,n("p",null,[a("GitHub 上标星 8700+ 的开源知识库《"),n("a",m,[a("二哥的 Java 进阶之路"),e(s)]),a("》第一版 PDF 终于来了！包括Java基础语法、数组&字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，可以说是通俗易懂、风趣幽默……详情戳："),n("a",g,[a("太赞了，GitHub 上标星 8700+ 的 Java 教程"),e(s)])]),b,f])}const x=t(l,[["render",y],["__file","pass-by-value.html.vue"]]);export{x as default};
