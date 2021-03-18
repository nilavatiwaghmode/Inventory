// import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin';

  Name:any;
  Description:any;
  Price:any;
  formData:any;
  InventoryList:any;

  currentPage = 1;
  itemsPerPage = 10;
  pageSize:any;
  filteredString:any;
  isInventoryList = true;
  submitted=false;

  form = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    Description: new FormControl('', [Validators.required]),
    Price: new FormControl('', Validators.required)
  });

  constructor(
   private loginSer:LoginService,
   private router: Router,
   private toastrSer:ToastrService,
   private formBuilder: FormBuilder,
   private httpClient: HttpClient
  ) {}

  ngOnInit() {

    this.httpClient.get("assets/data.json").subscribe(data =>{
      // console.log(data);
      this.InventoryList = data;
    })

    //This is get Inventory list using API

    // this.loginSer.getBackendData().subscribe(res=>{
    //   console.log(res);
    //   this.InventoryList = res;
    // });
  }

   // pagination
  //  public onPageChange(pageNum: number): void {
  //   this.pageSize = this.itemsPerPage * (pageNum - 1);
  // }

  onInventoryClick(item:any){
    //  console.log(item);
     this.isInventoryList = false;
     this.Name = item.name;
     this.Description = item.description;
     this.Price = item.price;
  }

  addNewInventory(){
    this.isInventoryList = false;
  }

  onCancel(){
    this.isInventoryList = true;

    this.Name = null;
    this.Description = null;
    this.Price = null;
  }

  get f(){
    return this.form.controls;
}

  onSubmit(myForm:NgForm){
    this.submitted = true;
    // console.log(myForm.value);

    //This is validation using Toastr Service
    // if(this.Name == null || this.Name == ''){
    //   this.toastrSer.error('Inventory name can not be blank', '!Error');
    //   return;
    // }
    // else if(this.Description == null || this.Description == ''){
    //   this.toastrSer.error('Inventory description can not be blank', '!Error');
    //   return;
    // }
    // else if(this.Price == null || this.Price == ''){
    //   this.toastrSer.error('Inventory price can not be blank', '!Error');
    //   return;
    // }

    if(this.form.status === 'VALID'){
      console.log(this.form.value);
    }
    

    // This is using API

    // this.formData={
    //   name : myForm.value.name,
    //   description : myForm.value.description,
    //   price : myForm.value.price
    // };
    // this.loginSer.insertData(this.formData).subscribe(res=>{
    //   // console.log(res);
    // });
  }

  updateData(){
    var updatedData={
      name : this.Name,
      description : this.Description,
      price : this.Price
    };
    this.loginSer.updateData(updatedData).subscribe(res=>{
      // console.log(res);
    });
  }
 

}
