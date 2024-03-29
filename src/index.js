import React, { useEffect } from "react";
import "./styles/index.scss";
import Accordion from "./components/accordion";
import AppBar from "./components/appbar";
import AppHeader from "./components/appheader";
import AutoComplete from "./components/autocomplete";
import Avatar from "./components/avatar";
import { BottomNavigation, BottomNavItem } from "./components/bottomnavigation";
import Breadcrumb from "./components/breadcrumb";
import Button from "./components/button";
import Checkbox from "./components/checkbox";
import Chip from "./components/Chip";
import Column from "./components/column";
import DatePicker from "./components/datepicker";
import Dialog from "./components/dialog";
import FlatIcon from "./components/icons";
import FloatingButton from "./components/floatingbutton";
import FloatingMenu from "./components/floatingmenu";
import InputField from "./components/inputfield";
import Link from "./components/link";
import { MenuDropdown, MenuItem } from "./components/menudropdown";
import Progress from "./components/progress";
import RadioButton from "./components/radio";
import RangeSlider from "./components/rangeslider";
import SelectDropDown from "./components/select";
import { Tabs, TabCard } from "./components/tabs";
import TabSelect from "./components/tabselect";
import Tag from "./components/tag";
import Text from "./components/text";
import { ToastProvider, useToast } from "./components/toast";
import ToggleInput from "./components/toggleInput";
import ToggleSwitch from "./components/toggleswitch";
import Tooltip from "./components/tooltip";

import * as ElysiumCloudIcons from "./components/icons/icon-lib";

export const UiProvidor = ({ children }) => {
  useEffect(() => {
    var imported = document.createElement("script");
    imported.src = "https://kit.fontawesome.com/c8ad5d74ba.js";
    imported.crossOrigin = "anonymous";
    document.head.appendChild(imported);
  }, []);
  return <div className='elc_ui-providor'>{children}</div>;
};

export {
  Accordion,
  AppBar,
  AppHeader,
  AutoComplete,
  Avatar,
  BottomNavigation,
  BottomNavItem,
  Breadcrumb,
  Button,
  Checkbox,
  Chip,
  Column,
  DatePicker,
  Dialog,
  FlatIcon,
  FloatingButton,
  FloatingMenu,
  InputField,
  Link,
  MenuDropdown,
  MenuItem,
  Progress,
  RadioButton,
  RangeSlider,
  SelectDropDown,
  Tabs,
  TabCard,
  TabSelect,
  Tag,
  Text,
  ToastProvider,
  useToast,
  ToggleInput,
  ToggleSwitch,
  Tooltip,
  ElysiumCloudIcons
};
