import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faLaptopCode,
  faDrawPolygon,
  faEdit,
  faBullhorn,
  faMapMarkerAlt,
  faPhone,
  faMobileAlt,
  faUsers,
  faHashtag,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

config.autoAddCss = false;

library.add(
  fab,
  faLaptopCode,
  faDrawPolygon,
  faEdit,
  faBullhorn,
  faMapMarkerAlt,
  faPhone,
  faMobileAlt,
  faUsers,
  faHashtag,
  faPaperPlane
);

const Icon: React.FC<FontAwesomeIconProps> = (props) => <FontAwesomeIcon {...props} />;

export default Icon;
