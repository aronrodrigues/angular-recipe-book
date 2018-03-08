import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Recipe Book');
    firebase.initializeApp({
      apiKey: 'AIzaSyDnJIsxMqsocJdrhi95t32y4V75nlIo8vQ',
    authDomain: 'ng-recipe-book-d3e9b.firebaseapp.com',
    databaseURL: 'https://ng-recipe-book-d3e9b.firebaseio.com',
    projectId: 'ng-recipe-book-d3e9b',
    storageBucket: 'ng-recipe-book-d3e9b.appspot.com',
    messagingSenderId: '501601986124'
    });
  }
}
