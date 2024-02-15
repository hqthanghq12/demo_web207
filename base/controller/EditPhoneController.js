window.EditPhoneController= function($scope,$routeParams, $http, $location){
    $scope.title = "SỬA ĐIỆN THOẠI";
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
    $scope.onSubmitFormEdit = function(){
        let editID = $scope.editID;
         // Validate
         let flag = false;
         // Kiểm tra xem người đã nhập tên hay chưa
         if(!$scope.inputValue || !$scope.inputValue.ten){
             // có lỗi
             $scope.kiemTraDuLieu.ten = true;
             flag = true;
         }
         // Kiểm tra xem người đã nhập giá hay chưa
         if(!$scope.inputValue || !$scope.inputValue.gia){
             // có lỗi
             $scope.kiemTraDuLieu.gia = true;
             flag = true;
         }
         // Kiểm tra xem người đã nhập giá có lớn hơn 100
         if(parseInt($scope.inputValue.gia) <= 100){
             // có lỗi
             $scope.kiemTraDuLieu.giaLon = true;
             flag = true;
         }
         // Validate năm sinh và chuyên -> bài tập
         if(!flag){
             let editItem = {
                 ten : $scope.inputValue.ten,
                 hang: $scope.inputValue.hang,
                 gia: $scope.inputValue.gia,
                 id: $scope.inputValue.id
             }
             // Thêm thì dùng phương thức post
             $http.put(
                `${apiPhone}/${editID}`,
                editItem
             ).then(
                 function(response){
                     if(response.status == 200){
                         $location.path(`/list-phone`);
                     }
                 }
             )
             $scope.onClose();
         }
      }
}