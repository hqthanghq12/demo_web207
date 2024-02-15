window.ListPhoneController = function ($scope, $http){
    $scope.title = "DANH SÁCH ĐIỆN THOẠI";

    // Thực hiên call api

    const apiPhone = "http://localhost:3000/phone";

    function getData(){
        $http.get(apiPhone).then(function (response){
            if (response.status == 200){
                $scope.listPhone = response.data;
            }
        })
    }
    getData();
$scope.onDelete = function(deleteID){
    let confirm = window.confirm("Bạn có chắc chắn muốn xóa hay không??");
    $scope.listPhone =  $scope.listPhone.filter(function(item){
        $http.delete(`${apiPhone}/${deleteID}`).then(function(response){
            if (response.status == 200){
                $scope.getData();
            }
        })
    })
}
}