import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import "./index.css";
import sdata from './sdata';

console.log(sdata[0].sname);

ReactDOM.render(
  <>
    <h1 className='heading_style'> My Friends Portal! #Prince </h1>
    <Card 
      imgsrc = {sdata[0].imgsrc}
      link = {sdata[0].link}
      title = {sdata[0].title}
      sname = {sdata[0].sname}
    />

    <Card 
      imgsrc = {sdata[1].imgsrc}
      link = {sdata[1].link}
      title = {sdata[1].title}
      sname = {sdata[1].sname}
    />

    <Card 
      imgsrc = {sdata[2].imgsrc}
      link = {sdata[2].link}
      title = {sdata[2].title}
      sname = {sdata[2].sname}
    />

    <Card 
      imgsrc = {sdata[3].imgsrc}
      link = {sdata[3].link}
      title = {sdata[3].title}
      sname = {sdata[3].sname}
    />

    <Card 
      imgsrc = {sdata[4].imgsrc}
      link = {sdata[4].link}
      title = {sdata[4].title}
      sname = {sdata[4].sname}
    />
  </>

  ,document.getElementById('root')
);