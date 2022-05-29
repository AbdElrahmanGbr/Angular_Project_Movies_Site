import { Component,OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
  title = 'Movies';
  ngOnInit(): void
  {
    getcountry();
    $("#country").change(function()
    {
      getstate($("#country").val());
    });
    $("#state").change(function()
    {
      getcity($("#state").val());
    });
  }
}

function getcountry()
{
  var country!:any[];
  country =
  [
    {id:'1', name: 'India'},
    {id:'2', name: 'Australia'},
    {id:'3', name: 'Brazil'}
  ];
  var items = '<option>--choose Country--</option>';
  for(var i=0; i < country.length; i++)
  {
   items += "<option value='"+ country[i].id +"'>" + country[i].name + "</option>"
  }
  $('#country').html(items);
}

function getstate(countryId: any)
{
  var states!:any[];
  states =
  [
    {id:'1', name: 'Gujarat', countryId:'1'},
    {id:'2', name: 'Rajasthan', countryId:'1'},
    {id:'3', name: 'victoria', countryId:'2'},
    {id:'4', name: 'Queensland', countryId:'2'},
    {id:'5', name: 'Tasmania', countryId:'2'},
    {id:'6', name: 'Cataria', countryId:'3'},
    {id:'7', name: 'Paulo', countryId:'3'},
  ];
  var items = '<option>--choose State--</option>';
  for(var i=0; i < states.length; i++)
  {
    if(states[i].countryId == countryId)
    {
      items += "<option value='"+ states[i].id +"'>" + states[i].name + "</option>"
    }
  }
  $('#state').html(items);
}

function getcity(stateId:any)
{
  var cities!:any[];
  cities =
  [
    {id:'1', name: 'surat', stateId:'1'},
    {id:'2', name: 'Navsari', stateId:'1'},
    {id:'3', name: 'Ahemdabad', stateId:'1'},
    {id:'4', name: 'Ajmer', stateId:'2'},
    {id:'5', name: 'Jaipur', stateId:'2'},
    {id:'6', name: 'Udaipur', stateId:'2'},
  ];
  var items = '<option>--choose City--</option>';
  for(var i=0; i < cities.length; i++)
  {
    if(cities[i].stateId == stateId)
    {
      items += "<option value='"+ cities[i].id +"'>" + cities[i].name + "</option>"
    }
  }
  $('#city').html(items);
}
