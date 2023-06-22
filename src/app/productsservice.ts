import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(){ }
  getproductsById(id:number):products{
    return this.getall().find(products=>products.id==id)!;
  }
  
  getall():products[]{
    return[
    {
      id:1,
      price:520,
      name:'Shirt',
      notfavourite:true,
      star:3.0,
      tags:['Summer','Winter','Clothing'],
      image:'assets/images/image1.jpg',
      origins:['Rajahmundry','Hyderabad','Nellore'],
      Time:'30-40'
    
    },
    {
      id:2,
      price:80,
      name:'Somosa',
      notfavourite:false,
      star:5.0,
      tags:['fastfood','pizza','Lunch'],
      image:'assets/images/2.jpg',
      origins:['Rajahmundry','Hyderabad','Eluru'],
      Time:'50-60'
    
    },
    {
      id:3,
      price:150,
      name:'Chicken',
      notfavourite:false,
      star:3.0,
      tags:['fastfood','Dinner','Lunch'],
      image:'assets/images/3.jpg',
      origins:['Vizag','Hyderabad','Eluru'],
      Time:'60-110'
    
    },
    {
      id:4,
      price:180,
      name:'Moon-Dal',
      notfavourite:false,
      star:4.0,
      tags:['Dinner','Lunch'],
      image:'assets/images/4.jpg',
      origins:['Vizag','Hyderabad','Banglore'],
      Time:'60-120'
    
    },
    {
      id:5,
      price:220,
      name:'Mahmood',
      notfavourite:false,
      star:4.0,
      tags:['Dinner','Lunch','Breakfast'],
      image:'assets/images/5.jpg',
      origins:['vijaywada','Hyderabad','Banglore'],
      Time:'60-120'
    
    },
    {
      id:6,
      price:140,
      name:'Pasta',
      notfavourite:false,
      star:3.0,
      tags:['Dinner','Lunch','Breakfast'],
      image:'assets/images/6.jpg',
      origins:['vijaywada','Rajahmundry','Banglore'],
      Time:'80-120'
    
    },
    {
      id:7,
      price:150,
      name:'Roles',
      notfavourite:true,
      star:3.0,
      tags:['Dinner','Lunch','Breakfast'],
      image:'assets/images/7.jpg',
      origins:['vijaywada','vizag','Banglore'],
      Time:'80-120'
    
    },
    {
      id:8,
      price:250,
      name:'Fish Fry',
      notfavourite:false,
      star:3.0,
      tags:['Dinner','Lunch','Breakfast'],
      image:'assets/images/8.jpg',
      origins:['vijaywada','Rajahmundry','Chennai'],
      Time:'60-110'
    
    },
    {
      id:9,
      price:30,
      name:'idli',
      notfavourite:true,
      star:3.0,
      tags:['Dinner','Lunch','Breakfast'],
      image:'assets/images/9.jpg',
      origins:['vijaywada','Rajahmundry','Banglore'],
      Time:'70-120'
    
    },
    {
      id:10,
      price:80,
      name:'Cake',
      notfavourite:false,
      star:3.0,
      tags:['Breakfast'],
      image:'assets/images/10.jpg',
      origins:['vijaywada','Rajahmundry','hyderabad'],
      Time:'40-80'
    
    },
    {
      id:11,
      price:150,
      name:'Roast',
      notfavourite:false,
      star:4.0,
      tags:['Dinner','Lunch','Breakfast'],
      image:'assets/images/11.jpg',
      origins:['vijaywada','Chennai'],
      Time:'60-150'
    
    },
    {
      id:12,
      price:110,
      name:'Burger',
      notfavourite:false,
      star:3.0,
      tags:['Dinner','Lunch','Breakfast'],
      image:'assets/images/12.jpg',
      origins:['vijaywada','Rajahmundry','Chennai'],
      Time:'60-110'
    
    },
    {
      id:13,
      price:180,
      name:'Secretes',
      notfavourite:false,
      star:4.0,
      tags:['Dinner','Lunch','Breakfast'],
      image:'assets/images/13.jpg',
      origins:['vijaywada','Banglore','vizag'],
      Time:'60-80'
    
    },
    {
      id:14,
      price:50,
      name:'Sandra',
      notfavourite:false,
      star:3.0,
      tags:['Dinner','Lunch','Breakfast'],
      image:'assets/images/14.jpg',
      origins:['vijaywada','Rajahmundry','Chennai'],
      Time:'60-110'
    
    },
    {
      id:15,
      price:40,
      name:'Chocolate',
      notfavourite:false,
      star:3.0,
      tags:['Breakfast'],
      image:'assets/images/15.jpg',
      origins:['vijaywada','Chennai'],
      Time:'60-110'
    
    },
    {
      id:16,
      price:120,
      name:'Trangdoan',
      notfavourite:false,
      star:3.0,
      tags:['Breakfast'],
      image:'assets/images/16.jpg',
      origins:['vijaywada','Chennai','Banglore'],
      Time:'60-110'
    
    }
    
      
    ]
    }
  
}
