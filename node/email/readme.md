## 使用stmp发邮件
telnet smtp.qq.com 25
授权码mclscukayhopiejb
helo qq //建立连接
auth login 登录账户 
MTM1ODIzODEwNUBxcS5jb20=
bWNsc2N1a2F5aG9waWVqYg==
mail from:<1358238105@qq.com>  
rcpt to:<1358238105@qq.com> 
data //提示下面为正文
from:school
to:123
subject:hello 
dear:xiaoliu haha
. 
quit//关闭连接