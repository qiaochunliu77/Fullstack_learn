## Content-type 
- text/plain
提交给后端的数据就是纯文本
````js

- application/x-www-form-urlencoded
- multipart/form-data
格式：
 -----------------------------205579936434786223734260171678
Content-Disposition: form-data; name="name"

123
-----------------------------205579936434786223734260171678
Content-Disposition: form-data; name="file"; filename="test.txt"
Content-Type: text/plain

123456789

-----------------------------205579936434786223734260171678--

前面两种编码对于二进制文件 或者 一些非 ASCII 字符 处理起来低效

后端处理文件上传 ：
- 分隔符分割 
- 得到分割后的每一块 ，得到文件内容 ，fs.write() 保存文件 