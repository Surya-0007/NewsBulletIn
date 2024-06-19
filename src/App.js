import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import NewsComponent from './Components/NewsComponent';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
export default class App extends Component {
  state = {
    progree: 0
  }
  setProgress = (progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <LoadingBar
        color='#000'
        progress={this.state.progress}
      />
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<NewsComponent setProgress = {this.setProgress} key="general" pageSize={6} country='in' category='general'/>} />
        <Route exact path="/general" element={<NewsComponent setProgress = {this.setProgress} key="general" pageSize={6} country='in' category='general'/>} />
        <Route exact path="/business" element={<NewsComponent setProgress = {this.setProgress} key="business" pageSize={6} country='in' category='business'/>} />
        <Route exact path="/entertainment" element={<NewsComponent setProgress = {this.setProgress} key="entertainment" pageSize={6} country='in' category='entertainment'/>} />
        <Route exact path="/health" element={<NewsComponent setProgress = {this.setProgress} key="health" pageSize={6} country='in' category='health'/>} />
        <Route exact path="/science" element={<NewsComponent setProgress = {this.setProgress} key="science" pageSize={6} country='in' category='science'/>} />
        <Route exact path="/sports" element={<NewsComponent setProgress = {this.setProgress} key="sports" pageSize={6} country='in' category='sports'/>} />
        <Route exact path="/technology" element={<NewsComponent setProgress = {this.setProgress} key="technology" pageSize={6} country='in' category='technology'/>} />
      </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
