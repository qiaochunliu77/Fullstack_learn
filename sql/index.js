const users = [
    {id: 1, name: 'john', age: 28, sex: 'male'},
    {id: 2, name: 'bob', age: 33, sex: 'male'},
    {id: 4, name: 'alice', age: 18, sex: 'female'},
    {id: 5, name: 'rihana', age: 35, sex: 'female'},
    {id: 6, name: 'sara', age: 20, sex: 'female'},
    {id: 3, name: 'tom', age: 22, sex: 'male'}
]
// 业务能力封装
// es5 function 类
// 抽象
function SQL(table) {
    this.table = table;
    // 结果的保存变量 当下的结果 每一步
    this._result = null;
    this._getRows = function() {
        return this._result ? this._result : this.table;
    }
}
// 条件动作
SQL.prototype.where = function (predicate) {
    // console.log(predicate)
    var rows = this._getRows();
    // 如果是数组的话 直接filter  如果是对象就
    if(Array.isArray(rows)){
        this._result = rows.filter(predicate);
    }else{
        // object
        // 拿出每一个数组 filter 返回的仍然是 
        console.log(Object.keys(rows),'keys');
        this._result = Object.keys(rows)
            .reduce(function(groups, group){
                groups[group] = rows[group].filter(predicate);
                return groups
            },{})
    }
    return this
}
SQL.prototype.groupBy = function(key) {
    var rows = this._getRows();
    // 分组 
    this._result = rows.reduce(function(groups, row) {
        var group = row[key];
        console.log('group',group)
        if(!groups[group]) {
            groups[group] = []
        }
        groups[group].push(row);
        return groups;
    },{})
    // console.log('_result',this._result)
    // return 实例 就可以链式调用
    return this;
}
SQL.prototype.getresult = function () {
    return this._result;
}
var sql = new SQL(users)
var predicate = function(row){
    return row.age < 30
}
var result = sql
    .groupBy('sex') //链式调用
    .where(predicate)
    .getresult();
    console.log(result)