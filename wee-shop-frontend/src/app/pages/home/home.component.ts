import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public products = [
    {
      name: "Hundred Mil Club Hoodie",
      price: 60.49,
      image: "https://img.represent.com/uploads/f1f7a1fe327b194e1dce29b4ce56463d.jpg?&w=750"
    },
    {
      name: "Hundred Mil Club T-Shirt",
      price: 36.29,
      image: "https://img.represent.com/uploads/10d39cb0f909e2e1e4ecdde6e8e53e11.jpg?&w=750"
    },
    {
      name: "Hundred Mil Club Sweat",
      price: 48.39,
      image: "https://img.represent.com/uploads/9867bf782a33be8713d19157e9c3f67c.jpg?&w=750"
    },
    {
      name: "Waves Hoodie",
      price: 60.49,
      image: "https://img.represent.com/uploads/242d3d7dd631b50eeea1a64625360952.jpg?&w=750"
    },
    {
      name: "Hundred Mil Club Hat",
      price: 36.29,
      image: "https://img.represent.com/uploads/9532038d1edd2ec1262c68e79ce9fcbb.jpg?w=420"
    }
  ]

  constructor() { }

  ngOnInit(): void
  {
  }



}
