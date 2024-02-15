window.DetailPhoneContronller= function($scope,$routeParams, $http, $location){
    $scope.title = "CHI TIẾT ĐIỆN THOẠI";
    // console.log($routeParams.id);
    $scope.editID = 0;
    const apiPhone = "http://localhost:3000/phone";
    if($routeParams.id){
        let idEdit = $routeParams.id;
        $scope.editID = idEdit;
        $http.get(`${apiPhone}/${idEdit}`).then(function(response){
            // console.log(response);
                if(response.status == 200){
                    $scope.inputValue = {
                        id: response.data.id,
                        ten: response.data.ten,
                        hang: response.data.hang,
                        gia: response.data.gia
                    }
                }
        })
    }
}