

//Angular controller 
myapp.controller('crudcontroller', function ($scope, crudservice) {
    
    //Loads all Employee records when page loads
    loadEmployees();
    function loadEmployees() {
        var EmployeeRecords = crudservice.getAllEmployees();
        EmployeeRecords.then(function (d) {     //success
            $scope.Employees = d.data;
        },
        function(){
            swal("Oops..","Error occured while loading","error"); //fail
        });
    }
   
    //save form data
    $scope.save = function () {
        //debugger;
        var Employee = {
            EmpNo:$scope.EmpNo,
            EmpName: $scope.EmpName,
            Salary: $scope.Salary,
            DeptName: $scope.DeptName,
            Designation: $scope.Designation
        };
        var saverecords = crudservice.save(Employee);
        saverecords.then(function (d) {
            $scope.EmpNo = d.data.EmpNo;
            loadEmployees();
            swal("Reord inserted successfully");
        },
        function(){
            swal("Oops..","Error occured while saving",'error');
        });
    }

    //get single record by ID

    $scope.get = function (Employee) {
        //debugger;
        var singlerecord = crudservice.get(Employee.EmpNo);
        singlerecord.then(function (d) {
           // debugger;
            var record = d.data;
            $scope.UpdateEmpNo = record.EmpNo;
            $scope.UpdateEmpName = record.EmpName;
            $scope.UpdateSalary = record.Salary;
            $scope.UpdateDeptName = record.DeptName;
            $scope.UpdateDesignation = record.Designation;
        },
        function(){
            swal("Oops...","Error occured while getting record","error");
        });
    }

    //update Employee data
    $scope.update = function () {
        //debugger;
        var Employee = {
            EmpNo: $scope.UpdateEmpNo,
            EmpName: $scope.UpdateEmpName,
            Salary: $scope.UpdateSalary,
            DeptName: $scope.UpdateDeptName,
            Designation:$scope.UpdateDesignation
        };
        debugger;
        var updaterecords = crudservice.update($scope.UpdateEmpNo, Employee);
        updaterecords.then(function (d) {
            loadEmployees();
            swal("Record updated successfully");
        },
        function () {
            swal("Opps...","Error occured while updating","error");
        });
    }

    //delete Employee record
    $scope.delete = function (UpdateEmpNo) {
        debugger;
        var deleterecord = crudservice.delete($scope.UpdateEmpNo);
        deleterecord.then(function (d) {
            var Employee = {
                EmpNo: '',
                EmpName: '',
                Salary: '',
                DeptName: '',
                Designation: ''
            };
            loadEmployees();
            swal("Record deleted succussfully");
        });
    }
});