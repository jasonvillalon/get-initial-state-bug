import React from "react"
import ReactDom from "react-dom"
import AppRoute from "./routes"
let cb = () => {
  // Initialize the router and begin the application
  ReactDom.render(AppRoute, document.getElementById("my-app"))
}
// Ensure the DOM has finished loading ..
if (document.readyState !== "loading") {
  cb()
} else if (document.addEventListener) {
  document.addEventListener("DOMContentLoaded", cb)
} else {
  document.attachEvent("onreadystatechange", function() {
    if (document.readyState !== "loading") {
      cb()
    }
  })
}
