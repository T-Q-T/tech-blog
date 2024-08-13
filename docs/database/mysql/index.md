# 数据库的基本结构
数据库是以表的形式进行管理的，把应用比作一个人，那么前端就是应用的四肢/感官，负责接触感知外界，接口则是神经元，将各种信息传递给上级，数据库则是大脑，负责贮存所有信息。
可以通过可视化工具 Navicat 链接到数据库，基本结构为服务器-数据库-表-列/行，以下为一个基本的数据库表。
![alt text](image.png)

# 查

## 基本语句

**1、SELECT <列名> FROM <表名> WHERE <条件>**

<列名> 为 * 时，代表查询出满足<条件>的全部列

```
SELECT * FROM test_table WHERE df<100
```
运行结果
![alt text](image-1.png)

<br>


**2、多条件同时满足查询使用 and 关键字 - 相当于大多数语言的 &&**

```
SELECT * FROM test_table WHERE df<100 AND id >100
```
运行结果
![alt text](image-2.png)

<br>


**3、多条件之一满足查询使用使用 or 关键字 - 相当于大多数语言的 ||**

```
SELECT * FROM test_table WHERE df<100 OR id >100
```
运行结果
![alt text](image-3.png)

<br>

**4、若想查询某个条件多个不同的值，可使用 in 关键字**

```
SELECT * FROM test_table WHERE id in(56,655)
```
运行结果
![alt text](image-4.png)

<br>


**5、模糊查询,使用 LIKE 关键字进行模糊查询**

其中 % 代表通配符，即任意内容即可，下面是一个查询个位数为 5 的示例
```
SELECT * FROM test_table WHERE id LIKE '%5'
```
运行结果
![alt text](image-5.png)

<br>

