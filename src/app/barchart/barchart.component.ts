import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';  
import { HttpClient } from '@angular/common/http';  
import { UserService } from '../user.service';
import { Data } from '../../app/Data';  

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  data: Data[];
  Entity = [];  
  Count = [];  
  barchart = []; 

  constructor(private http: HttpClient, private service : UserService) { }

  ngOnInit(): void {
    this.service.statistics().subscribe((result: Data[]) => {
      result.forEach(x => {
        this.Entity.push(x.crop);
        this.Count.push(x.counts);
      });
      this
      this.barchart = new Chart('canvas', {
        type: 'bar',
        title:{ text: " Crop Statistics " },
        data: {
          labels: this.Entity,
          datasets: [
            {
              data: this.Count,
              borderColor: '#3cba9f',
              backgroundColor: [
                "#3cb371",
                "#0000FF",
                "#9966FF",
                "#4C4CFF",
                "#00FFFF",
                "#f990a7",
                "#aad2ed",
                "#FF00FF",
                "Blue",
                "Red",
                "Blue"
              ],
              fill: true
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              title: { text : 'Crops' } ,
              display: true,
              labelString:'Crops',
            }],
            yAxes: [{
              id: 'CountOf Crops',
              ticks: {min: 0, max:5},
              labelString:'Count of crops',
              display:true,
            }],
          }
        }
      });
    });
  }


}
