const users = [
    {id: 1, name: 'john', age: 28, sex: 'male'},
    {id: 2, name: 'bob', age: 33, sex: 'male'},
    {id: 3, name: 'tom', age: 22, sex: 'male'},
    {id: 4, name: 'alice', age: 18, sex: 'female'},
    {id: 5, name: 'rihana', age: 35, sex: 'female'},
    {id: 6, name: 'sara', age: 20, sex: 'female'}
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
    
}
SQL.prototype.groupBy = function(key) {
    // console.log(key)
    var rows = this._getRows();
    console.log(rows)
    // 分组 
    this._result = rows.reduce(function(groups, row) {
        // console.log(groups, row)
        // console.log(groups)
        var group = row[key];
        if(! groups[group]) {
            groups[group] = []
        }
        groups[group].push(row);
        return groups;
    },{})
    console.log(this._result)
}

var sql = new SQL(users)
var result = sql.groupBy('sex');
