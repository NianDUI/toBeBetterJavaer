import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as n,e as s}from"./app.795d54da.js";const t={},i=s(`<h1 id="jdk9\u4E3A\u4F55\u8981\u5C06string\u7684\u5E95\u5C42\u5B9E\u73B0\u7531char-\u6539\u6210\u4E86byte" tabindex="-1"><a class="header-anchor" href="#jdk9\u4E3A\u4F55\u8981\u5C06string\u7684\u5E95\u5C42\u5B9E\u73B0\u7531char-\u6539\u6210\u4E86byte" aria-hidden="true">#</a> jdk9\u4E3A\u4F55\u8981\u5C06String\u7684\u5E95\u5C42\u5B9E\u73B0\u7531char[]\u6539\u6210\u4E86byte[]?</h1><p>\u5927\u5BB6\u597D\uFF0C\u6211\u662F\u4E8C\u54E5\u5440\uFF01\u5982\u679C\u4F60\u4E0D\u662F Java8 \u7684\u9489\u5B50\u6237\uFF0C\u4F60\u5E94\u8BE5\u65E9\u5C31\u53D1\u73B0\u4E86\uFF1AString \u7C7B\u7684\u6E90\u7801\u5DF2\u7ECF\u7531 <code>char[]</code> \u4F18\u5316\u4E3A\u4E86 <code>byte[]</code> \u6765\u5B58\u50A8\u5B57\u7B26\u4E32\u5185\u5BB9\uFF0C\u4E3A\u4EC0\u4E48\u8981\u8FD9\u6837\u505A\u5462\uFF1F</p><p>\u5F00\u95E8\u89C1\u5C71\u5730\u8BF4\uFF0C\u4ECE <code>char[]</code> \u5230 <code>byte[]</code>\uFF0C\u6700\u4E3B\u8981\u7684\u76EE\u7684\u662F<strong>\u4E3A\u4E86\u8282\u7701\u5B57\u7B26\u4E32\u5360\u7528\u7684\u5185\u5B58</strong>\u3002\u5185\u5B58\u5360\u7528\u51CF\u5C11\u5E26\u6765\u7684\u53E6\u5916\u4E00\u4E2A\u597D\u5904\uFF0C\u5C31\u662F GC \u6B21\u6570\u4E5F\u4F1A\u51CF\u5C11\u3002</p><h3 id="\u4E00\u3001\u4E3A\u4EC0\u4E48\u8981\u4F18\u5316-string-\u8282\u7701\u5185\u5B58\u7A7A\u95F4" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u4E3A\u4EC0\u4E48\u8981\u4F18\u5316-string-\u8282\u7701\u5185\u5B58\u7A7A\u95F4" aria-hidden="true">#</a> \u4E00\u3001\u4E3A\u4EC0\u4E48\u8981\u4F18\u5316 String \u8282\u7701\u5185\u5B58\u7A7A\u95F4</h3><p>\u6211\u4EEC\u4F7F\u7528 <code>jmap -histo:live pid | head -n 10</code> \u547D\u4EE4\u5C31\u53EF\u4EE5\u67E5\u770B\u5230\u5806\u5185\u5BF9\u8C61\u793A\u4F8B\u7684\u7EDF\u8BA1\u4FE1\u606F\u3001\u67E5\u770B ClassLoader \u7684\u4FE1\u606F\u4EE5\u53CA finalizer \u961F\u5217\u3002</p><p>\u4EE5\u6211\u6B63\u5728\u8FD0\u884C\u7740\u7684\u7F16\u7A0B\u55B5\u55B5\u9879\u76EE\u5B9E\u4F8B\uFF08\u57FA\u4E8E Java 8\uFF09\u6765\u8BF4\uFF0C\u7ED3\u679C\u662F\u8FD9\u6837\u7684\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/basic-extra-meal/jdk9-char-byte-string-d826ce88-bbbe-47a3-a1a9-4dd86dd3632f.png" alt=""></p><p>\u5176\u4E2D String \u5BF9\u8C61\u6709 17638 \u4E2A\uFF0C\u5360\u7528\u4E86 423312 \u4E2A\u5B57\u8282\u7684\u5185\u5B58\uFF0C\u6392\u5728\u7B2C\u4E09\u4F4D\u3002</p><p>\u7531\u4E8E Java 8 \u7684 String \u5185\u90E8\u5B9E\u73B0\u4ECD\u7136\u662F <code>char[]</code>\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u5185\u5B58\u5360\u7528\u6392\u5728\u7B2C 1 \u4F4D\u7684\u5C31\u662F char \u6570\u7EC4\u3002</p><p><code>char[]</code> \u5BF9\u8C61\u6709 17673 \u4E2A\uFF0C\u5360\u7528\u4E86 1621352 \u4E2A\u5B57\u8282\u7684\u5185\u5B58\uFF0C\u6392\u5728\u7B2C\u4E00\u4F4D\u3002</p><p>\u90A3\u4E5F\u5C31\u662F\u8BF4\u4F18\u5316 String \u8282\u7701\u5185\u5B58\u7A7A\u95F4\u662F\u975E\u5E38\u6709\u5FC5\u8981\u7684\uFF0C\u5982\u679C\u662F\u53BB\u4F18\u5316\u4E00\u4E2A\u4F7F\u7528\u9891\u7387\u6CA1\u6709 String \u8FD9\u4E48\u9AD8\u7684\u7C7B\u5E93\uFF0C\u5C31\u663E\u5F97\u975E\u5E38\u7684\u9E21\u808B\u3002</p><h3 id="\u4E8C\u3001byte-\u4E3A\u4EC0\u4E48\u5C31\u80FD\u8282\u7701\u5185\u5B58\u7A7A\u95F4\u5462" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001byte-\u4E3A\u4EC0\u4E48\u5C31\u80FD\u8282\u7701\u5185\u5B58\u7A7A\u95F4\u5462" aria-hidden="true">#</a> \u4E8C\u3001<code>byte[]</code> \u4E3A\u4EC0\u4E48\u5C31\u80FD\u8282\u7701\u5185\u5B58\u7A7A\u95F4\u5462\uFF1F</h3><p>\u4F17\u6240\u5468\u77E5\uFF0Cchar \u7C7B\u578B\u7684\u6570\u636E\u5728 JVM \u4E2D\u662F\u5360\u7528\u4E24\u4E2A\u5B57\u8282\u7684\uFF0C\u5E76\u4E14\u4F7F\u7528\u7684\u662F UTF-8 \u7F16\u7801\uFF0C\u5176\u503C\u8303\u56F4\u5728 &#39;\\u0000&#39;\uFF080\uFF09\u548C &#39;\\uffff&#39;\uFF0865,535\uFF09\uFF08\u5305\u542B\uFF09\u4E4B\u95F4\u3002</p><p>\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4F7F\u7528 <code>char[]</code> \u6765\u8868\u793A String \u5C31\u5BFC\u81F4\u4E86\u5373\u4F7F String \u4E2D\u7684\u5B57\u7B26\u53EA\u7528\u4E00\u4E2A\u5B57\u8282\u5C31\u80FD\u8868\u793A\uFF0C\u4E5F\u5F97\u5360\u7528\u4E24\u4E2A\u5B57\u8282\u3002</p><p>\u800C\u5B9E\u9645\u5F00\u53D1\u4E2D\uFF0C\u5355\u5B57\u8282\u7684\u5B57\u7B26\u4F7F\u7528\u9891\u7387\u4ECD\u7136\u8981\u9AD8\u4E8E\u53CC\u5B57\u8282\u7684\u3002</p><p>\u5F53\u7136\u4E86\uFF0C\u4EC5\u4EC5\u5C06 <code>char[]</code> \u4F18\u5316\u4E3A <code>byte[]</code> \u662F\u4E0D\u591F\u7684\uFF0C\u8FD8\u8981\u914D\u5408 Latin-1 \u7684\u7F16\u7801\u65B9\u5F0F\uFF0C\u8BE5\u7F16\u7801\u65B9\u5F0F\u662F\u7528\u5355\u4E2A\u5B57\u8282\u6765\u8868\u793A\u5B57\u7B26\u7684\uFF0C\u8FD9\u6837\u5C31\u6BD4 UTF-8 \u7F16\u7801\u8282\u7701\u4E86\u66F4\u591A\u7684\u7A7A\u95F4\u3002</p><p>\u6362\u53E5\u8BDD\u8BF4\uFF0C\u5BF9\u4E8E\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">&quot;jack&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u6837\u7684\uFF0C\u4F7F\u7528 Latin-1 \u7F16\u7801\uFF0C\u5360\u7528 4 \u4E2A\u5B57\u8282\u5C31\u591F\u4E86\u3002</p><p>\u4F46\u5BF9\u4E8E\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">&quot;\u5C0F\u4E8C&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u79CD\uFF0C\u6728\u7684\u529E\u6CD5\uFF0C\u53EA\u80FD\u4F7F\u7528 UTF16 \u6765\u7F16\u7801\u3002</p><p>\u9488\u5BF9 JDK 9 \u7684 String \u6E90\u7801\u91CC\uFF0C\u4E3A\u4E86\u533A\u522B\u7F16\u7801\u65B9\u5F0F\uFF0C\u8FFD\u52A0\u4E86\u4E00\u4E2A coder \u5B57\u6BB5\u6765\u533A\u5206\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * The identifier of the encoding used to encode the bytes in
 * <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java">value</span></span><span class="token punctuation">}</span>. The supported values in this implementation are
 *
 * LATIN1
 * UTF16
 *
 * <span class="token keyword">@implNote</span> This field is trusted by the VM, and is a subject to
 * constant folding if String instance is constant. Overwriting this
 * field after construction will cause problems.
 */</span>
<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">byte</span> coder<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Java \u4F1A\u6839\u636E\u5B57\u7B26\u4E32\u7684\u5185\u5BB9\u81EA\u52A8\u8BBE\u7F6E\u4E3A\u76F8\u5E94\u7684\u7F16\u7801\uFF0C\u8981\u4E48 Latin-1 \u8981\u4E48 UTF16\u3002</p><p>\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4ECE <code>char[]</code> \u5230 <code>byte[]</code>\uFF0C<strong>\u4E2D\u6587\u662F\u4E24\u4E2A\u5B57\u8282\uFF0C\u7EAF\u82F1\u6587\u662F\u4E00\u4E2A\u5B57\u8282\uFF0C\u5728\u6B64\u4E4B\u524D\u5462\uFF0C\u4E2D\u6587\u662F\u4E24\u4E2A\u5B57\u8282\uFF0C\u5E94\u4E3A\u4E5F\u662F\u4E24\u4E2A\u5B57\u8282</strong>\u3002</p><h3 id="\u4E09\u3001\u4E3A\u4EC0\u4E48\u7528utf-16\u800C\u4E0D\u7528utf-8\u5462" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u4E3A\u4EC0\u4E48\u7528utf-16\u800C\u4E0D\u7528utf-8\u5462" aria-hidden="true">#</a> \u4E09\u3001\u4E3A\u4EC0\u4E48\u7528UTF-16\u800C\u4E0D\u7528UTF-8\u5462\uFF1F</h3><p>\u5728 UTF-8 \u4E2D\uFF0C0-127 \u53F7\u7684\u5B57\u7B26\u7528 1 \u4E2A\u5B57\u8282\u6765\u8868\u793A\uFF0C\u4F7F\u7528\u548C ASCII \u76F8\u540C\u7684\u7F16\u7801\u3002\u53EA\u6709 128 \u53F7\u53CA\u4EE5\u4E0A\u7684\u5B57\u7B26\u624D\u7528 2 \u4E2A\u30013 \u4E2A\u6216\u8005 4 \u4E2A\u5B57\u8282\u6765\u8868\u793A\u3002</p><ul><li>\u5982\u679C\u53EA\u6709\u4E00\u4E2A\u5B57\u8282\uFF0C\u90A3\u4E48\u6700\u9AD8\u7684\u6BD4\u7279\u4F4D\u4E3A 0\uFF1B</li><li>\u5982\u679C\u6709\u591A\u4E2A\u5B57\u8282\uFF0C\u90A3\u4E48\u7B2C\u4E00\u4E2A\u5B57\u8282\u4ECE\u6700\u9AD8\u4F4D\u5F00\u59CB\uFF0C\u8FDE\u7EED\u6709\u51E0\u4E2A\u6BD4\u7279\u4F4D\u7684\u503C\u4E3A 1\uFF0C\u5C31\u4F7F\u7528\u51E0\u4E2A\u5B57\u8282\u7F16\u7801\uFF0C\u5269\u4E0B\u7684\u5B57\u8282\u5747\u4EE5 10 \u5F00\u5934\u3002</li></ul><p>\u5177\u4F53\u7684\u8868\u73B0\u5F62\u5F0F\u4E3A\uFF1A</p><ul><li>0xxxxxxx\uFF1A\u4E00\u4E2A\u5B57\u8282\uFF1B</li><li>110xxxxx 10xxxxxx\uFF1A\u4E24\u4E2A\u5B57\u8282\u7F16\u7801\u5F62\u5F0F\uFF08\u5F00\u59CB\u4E24\u4E2A 1\uFF09\uFF1B - 1110xxxx 10xxxxxx 10xxxxxx\uFF1A\u4E09\u5B57\u8282\u7F16\u7801\u5F62\u5F0F\uFF08\u5F00\u59CB\u4E09\u4E2A 1\uFF09\uFF1B</li><li>11110xxx 10xxxxxx 10xxxxxx 10xxxxxx\uFF1A\u56DB\u5B57\u8282\u7F16\u7801\u5F62\u5F0F\uFF08\u5F00\u59CB\u56DB\u4E2A 1\uFF09\u3002</li></ul><p>\u5173\u4E8E\u5B57\u7B26\u7F16\u7801\uFF0C\u6211\u5728\u300AJava \u7A0B\u5E8F\u5458\u8FDB\u9636\u4E4B\u8DEF\u300B\u91CC\u66FE\u8BB2\u5230\u8FC7\uFF0C\u60F3\u8981\u6DF1\u5165\u4E86\u89E3\u7684\u5C0F\u4F19\u4F34\u67E5\u770B\u4E0B\u9762\u7684\u94FE\u63A5\u{1F517}\uFF1A</p><blockquote><p>https://tobebetterjavaer.com/basic-extra-meal/java-unicode.html</p></blockquote><p>\u4E5F\u5C31\u662F\u8BF4\uFF0CUTF-8 \u662F\u53D8\u957F\u7684\uFF0C\u90A3\u5BF9\u4E8E String \u8FD9\u79CD\u6709\u968F\u673A\u8BBF\u95EE\u65B9\u6CD5\u7684\u7C7B\u6765\u8BF4\uFF0C\u5C31\u5F88\u4E0D\u65B9\u4FBF\u3002\u6240\u8C13\u7684\u968F\u673A\u8BBF\u95EE\uFF0C\u5C31\u662FcharAt\u3001subString\u8FD9\u79CD\u65B9\u6CD5\uFF0C\u968F\u4FBF\u6307\u5B9A\u4E00\u4E2A\u6570\u5B57\uFF0CString\u8981\u80FD\u7ED9\u51FA\u7ED3\u679C\u3002\u5982\u679C\u5B57\u7B26\u4E32\u4E2D\u7684\u6BCF\u4E2A\u5B57\u7B26\u5360\u7528\u7684\u5185\u5B58\u662F\u4E0D\u5B9A\u957F\u7684\uFF0C\u90A3\u4E48\u8FDB\u884C\u968F\u673A\u8BBF\u95EE\u7684\u65F6\u5019\uFF0C\u5C31\u9700\u8981\u4ECE\u5934\u5F00\u59CB\u6570\u6BCF\u4E2A\u5B57\u7B26\u7684\u957F\u5EA6\uFF0C\u624D\u80FD\u627E\u5230\u4F60\u60F3\u8981\u7684\u5B57\u7B26\u3002</p><p>\u90A3\u6709\u5C0F\u4F19\u4F34\u53EF\u80FD\u4F1A\u95EE\uFF0CUTF-16\u4E5F\u662F\u53D8\u957F\u7684\u5462\uFF1F\u4E00\u4E2A\u5B57\u7B26\u8FD8\u53EF\u80FD\u5360\u7528 4 \u4E2A\u5B57\u8282\u5462\uFF1F</p><p>\u7684\u786E\uFF0CUTF-16 \u4F7F\u7528 2 \u4E2A\u6216\u8005 4 \u4E2A\u5B57\u8282\u6765\u5B58\u50A8\u5B57\u7B26\u3002</p><ul><li>\u5BF9\u4E8E Unicode \u7F16\u53F7\u8303\u56F4\u5728 0 ~ FFFF \u4E4B\u95F4\u7684\u5B57\u7B26\uFF0CUTF-16 \u4F7F\u7528\u4E24\u4E2A\u5B57\u8282\u5B58\u50A8\u3002</li><li>\u5BF9\u4E8E Unicode \u7F16\u53F7\u8303\u56F4\u5728 10000 ~ 10FFFF \u4E4B\u95F4\u7684\u5B57\u7B26\uFF0CUTF-16 \u4F7F\u7528\u56DB\u4E2A\u5B57\u8282\u5B58\u50A8\uFF0C\u5177\u4F53\u6765\u8BF4\u5C31\u662F\uFF1A\u5C06\u5B57\u7B26\u7F16\u53F7\u7684\u6240\u6709\u6BD4\u7279\u4F4D\u5206\u6210\u4E24\u90E8\u5206\uFF0C\u8F83\u9AD8\u7684\u4E00\u4E9B\u6BD4\u7279\u4F4D\u7528\u4E00\u4E2A\u503C\u4ECB\u4E8E D800~DBFF \u4E4B\u95F4\u7684\u53CC\u5B57\u8282\u5B58\u50A8\uFF0C\u8F83\u4F4E\u7684\u4E00\u4E9B\u6BD4\u7279\u4F4D\uFF08\u5269\u4E0B\u7684\u6BD4\u7279\u4F4D\uFF09\u7528\u4E00\u4E2A\u503C\u4ECB\u4E8E DC00~DFFF \u4E4B\u95F4\u7684\u53CC\u5B57\u8282\u5B58\u50A8\u3002</li></ul><p>\u4F46\u662F\u5728 Java \u4E2D\uFF0C\u4E00\u4E2A\u5B57\u7B26\uFF08char\uFF09\u5C31\u662F 2 \u4E2A\u5B57\u8282\uFF0C\u5360 4 \u4E2A\u5B57\u8282\u7684\u5B57\u7B26\uFF0C\u5728 Java \u91CC\u4E5F\u662F\u7528\u4E24\u4E2A char \u6765\u5B58\u50A8\u7684\uFF0C\u800CString\u7684\u5404\u79CD\u64CD\u4F5C\uFF0C\u90FD\u662F\u4EE5Java\u7684\u5B57\u7B26\uFF08char\uFF09\u4E3A\u5355\u4F4D\u7684\uFF0CcharAt\u662F\u53D6\u5F97\u7B2C\u51E0\u4E2Achar\uFF0CsubString\u53D6\u7684\u4E5F\u662F\u7B2C\u51E0\u4E2A\u5230\u7B2C\u51E0\u4E2Achar\u7EC4\u6210\u7684\u5B50\u4E32\uFF0C\u751A\u81F3length\u8FD4\u56DE\u7684\u90FD\u662Fchar\u7684\u4E2A\u6570\u3002</p><p>\u6240\u4EE5UTF-16\u5728Java\u7684\u4E16\u754C\u91CC\uFF0C\u5C31\u53EF\u4EE5\u89C6\u4E3A\u4E00\u4E2A\u5B9A\u957F\u7684\u7F16\u7801\u3002</p><blockquote><p>\u53C2\u8003\u94FE\u63A5\uFF1Ahttps://www.zhihu.com/question/447224628</p></blockquote><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png" alt=""></p>`,41),c=[i];function r(d,o){return e(),n("div",null,c)}var u=a(t,[["render",r],["__file","jdk9-char-byte-string.html.vue"]]);export{u as default};
