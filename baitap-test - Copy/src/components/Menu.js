import React, {Component} from 'react';
import { NavLink } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <NavLink 
                to="/" 
                className="nav-link">
                <span className="fas fa-home"> Trang Chủ</span>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink 
                to="/quan-ly-sp" 
                className="nav-link">
                <span className="fas fa-tasks"> Quản Lý Sản Phẩm</span>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink 
                to="/lien-he" 
                className="nav-link">
                <span className="fas fa-address-book"> Liên Hệ</span>
            </NavLink>
          </li>
        </ul>
      );
    }
  }
export default Menu;