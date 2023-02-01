import React, { Component } from "react";
import axios from "axios";
import DropzoneComponent from "react-dropzone-component";

import "../../../node_modules/react-dropzone-component/styles/filepicker.css";
import "../../../node_modules/dropzone/dist/min/dropzone.min.css";


export default class PortfolioForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      category: "Goverment",
      position: "",
      url: "",
      thumb_image: "",
      banner_image: "",
      logo: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.componentConfig = this.componentConfig.bind(this);
    this.djsConfig = this.djsConfig.bind(this);
    this.handleThumbDrop = this.handleThumbDrop.bind(this);
    this.handleBannerDrop = this.handleBannerDrop.bind(this);
    this.handleLogoDrop = this.handleLogoDrop.bind(this);

  }

  handleThumbDrop() {
    return {
      //The handleThumpDrop is going to pass through the dropZoneComponent and it will look inside the return statement and find the addedFile and run it.
      addedfile: file => this.setState({ thumb_image: file })
    }
  }

  handleBannerDrop() {
    return {
      addedfile: file => this.setState({ banner_image: file })
    }
  }

  
  handleLogoDrop() {
    return {
      addedfile: file => this.setState({ logo: file })
    }
  }

  componentConfig() {
    return {
      iconFiletypes: [".jpg", ".png"],
      showFiletypeIcon: true,
      postUrl: "https://httpbin.org/post"
    }
  }

  djsConfig() {
    return {
      addRemoveLinks: true,
      maxFiles: 1
    }
  }

  buildForm() {
    let formData = new FormData();

    //connects state to the item
    formData.append("portfolio_item[name]", this.state.name);
    formData.append("portfolio_item[description]", this.state.description);
    formData.append("portfolio_item[url]", this.state.url);
    formData.append("portfolio_item[category]", this.state.category);
    formData.append("portfolio_item[position]", this.state.position);

    if (this.state.thumb_image) {
      formData.append("portfolio_item[thumb_image]", this.state.thumb_image);

    }

    if (this.state.banner_image) {
      formData.append("portfolio_item[banner_image]", this.state.banner_image);

    }


    return formData;
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {

    axios.post("https://natking.devcamp.space/portfolio/portfolio_items", 
    this.buildForm(), 
    { withCredentials: true }
    ).then(response => {
        this.props.handleSuccessfulFormSubmission(response.data.portfolio_item)
    }).catch(error => {
        console.log("Portfolio from handleSubmit error", error)
    })

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>PortfolioForm</h1>

        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Portfolio Item Name"
              value={this.state.name}
              onChange={this.handleChange}
            />

            <input
              type="text"
              name="url"
              placeholder="URL"
              value={this.state.url}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <input
              type="text"
              name="position"
              placeholder="Position"
              value={this.state.position}
              onChange={this.handleChange}
            />

            <select
              name="category"
              value={this.state.category}
              onChange={this.handleChange}
            >
            <option value="Goverment">Goverment</option> 
            <option value="Private Sector">Private Sector</option>
            <option value="Contractor">Contractor</option>

            </select>

          </div>

          <div>
            <textarea
              type="text"
              name="description"
              placeholder="Description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>

          <div className="image-uploaders">
            <DropzoneComponent
            config={this.componentConfig()}
            djsConfig ={this.djsConfig()}
            //Dropzone would not understand handleThumbDrop
            eventHandlers = {this.handleThumbDrop()}
            >

            </DropzoneComponent>
            <DropzoneComponent
            config={this.componentConfig()}
            djsConfig ={this.djsConfig()}
            //Dropzone would not understand handleBannerDrop
            eventHandlers = {this.handleBannerDrop()}
            >

            </DropzoneComponent>

            <DropzoneComponent
            config={this.componentConfig()}
            djsConfig ={this.djsConfig()}
            //Dropzone would not understand handleLogoDrop
            eventHandlers = {this.handleLogoDrop()}
            >

            </DropzoneComponent>
          </div>

          <div>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    );
  }
}