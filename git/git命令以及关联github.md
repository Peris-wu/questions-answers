# 查看全局配置

git config --global --list

# git 全局配置指令

git config --global user.name "your_name"
git config --global user.email "your_email"

# 删除全局配置的邮箱

git config --global --unset user.email

# 本地仓库与远程仓库建立连接

git remote add origin '远程仓库地址'

# 查看本地所有分支

git branch -va

# 删除本地分支

git branch -D 分支名 (需要切换到其他分支上再删除)

# 删除远程分支

git push origin --delete 分支名

# 清理本地无效分支

git fetch -p

# 创建分支并切换

git checkout -b 分支名

# 允许不相关历史提交，并强制合并
git pull origin master --allow-unrelated-histories

# 强制提交(覆盖原有分支所有的文件)(慎用)
git push --force origin master

# 已经提交，未push到远程仓库，代码回滚

git log  //查看历史commit 记录 版本号

git reset --soft 版本号 // 取消版本号之后的commit，版本号之后的变更提交到暂存区

git reset --mixed 版本号  // 取消版本号之后的commit，版本号之后的变更没有提交到暂存区

# 已经提交，已push到远程仓库，代码回滚
git reset --hard 版本号 撤销版本号之后的提交记录，**慎用**

git revert 版本号 撤销，但是保存了提交记录

reset 是回滚到版本号
revert 是删除版本号,但有记录,不会影响其他的commit 是个神技,希望两个撤销都不需要用到

# !!!!!!!!!!

## 配置流程

一: 全局配置
git config --global user.name "your_name"
git config --global user.email "your_email"
二：配置免帐号密码登录 git(关联 github)
1 在本地环境下 C 盘->用户->用户名->.ssh->id_rsa.pub。
2 用记事本打开 id_rsa.pub 然后复制里面的内容
3 打开 github 在点击头像找到 settings 在左边点击 SSH and GPG keys->new SSH key 然后生成 key
三：本地仓库关联远程仓库
1 初始化本地仓库

## 通过 git init 初始化仓库时 需要有新的改变 然后->git add .->git comiit -m 'message' 后才能看到分支

2 通过 git checkout -b dev 创建 dev 分支 然后通过 git branch -D master 删除 master 分支,在通过 git checkout -b main 创建 main 分支(为了与 github 远程仓库一致)
3 通过 git remote add origin 远程仓库地址
4 切换到 main 分支 通过 git pull origin main --allow-unrelated-histories 拉取远程仓库（因为创建远程仓库的时候 添加了 README.md 文件,所以不拉取跟本地仓库不一致会，直接推送会报错）,如果本地有 README.md 文件 需要解决冲突
5 然后通过 git push origin 分支名
