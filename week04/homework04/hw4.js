angular.module('midterm', [])
  .controller('MidtermManager', function($scope) {

    $scope.groups = [
      {name:'Socket.IO', description:'Socket.IO enables real-time bidirectional event-based communication.'},
      {name:'Mongoose', description:'Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.'},
      {name:'Express', description:'Express.js is a Node.js web application server framework, designed for building single-page, multi-page, and hybrid web applications.'}
      ];

    $scope.SG = [
      {name:'Jaymin', group:'Socket.IO'},
      {name:'Vikalp', group:'Socket.IO'},
      {name:'Julian', group:'Socket.IO'},
      {name:'Anil', group:'Socket.IO'},
      {name:'Nicket', group:'Express'},
      {name:'Loc', group:'Express'},
      {name:'Shridhar', group:'Express'}
      ];

    $scope.TG = [
      {task:'Explain what is your node module.', group:'Socket.IO', done: false},
      {task:'What problem or problems does your node module solve.', group:'Socket.IO', done: false},
      {task:'Are there any competitor modules?', group:'Socket.IO', done: false},
      {task:'Where can you find documentation on your module.', group:'Express', done: false},
      {task:'Additional details about your module.', group:'Express', done: false}
    ];


    $scope.addGroup = function() {
      $scope.groups.push({name:$scope.newModule, description: $scope.description});
      $scope.newModule = '';
      $scope.description= '';
    };

    $scope.addStudent = function() {
        $scope.SG.push({name:$scope.newStudent, group: $scope.newStudentInGroup});
        $scope.newStudent = '';
    };

    $scope.addTask = function() {
        $scope.TG.push({task:$scope.newTask, group: $scope.addTaskToGroup});
        $scope.newTask = '';
    };



    $scope.StudentInGroup = function(groupName) {
        var arr = [];
        angular.forEach($scope.SG, function(stu) {
            if (stu.group === groupName ){
              arr.push(stu);
            };
        });
        return arr;
    };

    $scope.TaskInGroup = function(groupName) {
        var arr = [];
        angular.forEach($scope.TG, function(task) {
            if (task.group === groupName ){
              arr.push(task);
            };
        });
        return arr;
    };



    $scope.deleteTask = function(task) {
      var oldTasks = $scope.TG;
      $scope.TG = [];
      angular.forEach(oldTasks, function(curr) {
        if (curr.task !== task)
         $scope.TG.push(curr);
      });
    };

    $scope.deleteMember = function(member) {
      var oldMembers = $scope.SG;
      $scope.SG = [];
      angular.forEach(oldMembers, function(curr) {
        if (curr.name !== member)
         $scope.SG.push(curr);
      });
    };

    $scope.deleteGroup = function(groupName) {
      var oldGroups = $scope.groups;
      $scope.groups = [];
      angular.forEach(oldGroups, function(curr) {
        if (curr.name !== groupName)
         $scope.groups.push(curr);
      });
    };



    $scope.completedTask = function(groupName) {
      var count = $scope.TG.length;
      angular.forEach($scope.TG, function(task) {
        if (task.group === groupName ){
          count -= task.done ? 0 : 1;
        } else {
          count--;
        }
      });
      return count;
    };

    $scope.TaskLength = function(groupName) {
      var count = 0;
      angular.forEach($scope.TG, function(curr) {
        if(curr.group === groupName)
        count++;
      });
      return count;
    };



    $scope.totalGroups = function() {
      var count = 0;
      angular.forEach($scope.groups, function(group) {
        count++;
      });
      return count;
    };

    $scope.totalMembers = function(groupName) {
      var count = 0;
      angular.forEach($scope.SG, function(curr) {
        if (curr.group == groupName)
        count++;
      });
      return count;
    };


  });
