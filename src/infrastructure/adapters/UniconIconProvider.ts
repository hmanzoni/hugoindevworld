import React, { ComponentType } from 'react';
import { IconProvider } from '@domain/ports/IconProvider';
import { IconConfig, IconRegistry } from '@domain/models/Icon';

import UilMessage from '@iconscout/react-unicons/icons/uil-message';
import UilCalendarAlt from '@iconscout/react-unicons/icons/uil-calendar-alt';
import UilDownloadAlt from '@iconscout/react-unicons/icons/uil-download-alt';
import UilPhone from '@iconscout/react-unicons/icons/uil-phone';
import UilEnvelope from '@iconscout/react-unicons/icons/uil-envelope';
import UilMapMarker from '@iconscout/react-unicons/icons/uil-map-marker';
import UilEstate from '@iconscout/react-unicons/icons/uil-estate';
import UilUser from '@iconscout/react-unicons/icons/uil-user';
import UilFileAlt from '@iconscout/react-unicons/icons/uil-file-alt';
import UilBriefcaseAlt from '@iconscout/react-unicons/icons/uil-briefcase-alt';
import UilArrowDown from '@iconscout/react-unicons/icons/uil-arrow-down';
import UilArrowRight from '@iconscout/react-unicons/icons/uil-arrow-right';
import UilAngleRightB from '@iconscout/react-unicons/icons/uil-angle-right-b';
import UilAngleLeftB from '@iconscout/react-unicons/icons/uil-angle-left-b';
import UilGraduationCap from '@iconscout/react-unicons/icons/uil-graduation-cap';
import UilCheckCircle from '@iconscout/react-unicons/icons/uil-check-circle';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import UilBracketsCurly from '@iconscout/react-unicons/icons/uil-brackets-curly';
import UilStar from '@iconscout/react-unicons/icons/uil-star';
import UilCloudDatabaseTree from '@iconscout/react-unicons/icons/uil-cloud-database-tree';
import UilWebGrid from '@iconscout/react-unicons/icons/uil-web-grid';
import UilServer from '@iconscout/react-unicons/icons/uil-server';
import UilMouseAlt from '@iconscout/react-unicons/icons/uil-mouse-alt';
import UilArrowUp from '@iconscout/react-unicons/icons/uil-arrow-up';
import UilAngleDown from '@iconscout/react-unicons/icons/uil-angle-down';
import UilFacebookF from '@iconscout/react-unicons/icons/uil-facebook-f';
import UilInstagram from '@iconscout/react-unicons/icons/uil-instagram';
import UilLinkedinAlt from '@iconscout/react-unicons/icons/uil-linkedin-alt';
import UilBookOpen from '@iconscout/react-unicons/icons/uil-book-open';
import UilGithubAlt from '@iconscout/react-unicons/icons/uil-github-alt';
import UilEnvelopeShare from '@iconscout/react-unicons/icons/uil-envelope-share';
import UilArrowGrowth from '@iconscout/react-unicons/icons/uil-statistics';
import UilMoon from '@iconscout/react-unicons/icons/uil-moon';
import UilSun from '@iconscout/react-unicons/icons/uil-sun';
import UilApps from '@iconscout/react-unicons/icons/uil-apps';

type IconComponent = ComponentType<{ size?: string | number; color?: string; className?: string }>;

const iconLibrary: Record<string, IconComponent> = {
  UilMessage,
  UilCalendarAlt,
  UilDownloadAlt,
  UilPhone,
  UilEnvelope,
  UilMapMarker,
  UilEstate,
  UilUser,
  UilFileAlt,
  UilBriefcaseAlt,
  UilArrowDown,
  UilArrowRight,
  UilAngleRightB,
  UilAngleLeftB,
  UilGraduationCap,
  UilCheckCircle,
  UilTimes,
  UilBracketsCurly,
  UilStar,
  UilCloudDatabaseTree,
  UilWebGrid,
  UilServer,
  UilMouseAlt,
  UilArrowUp,
  UilAngleDown,
  UilFacebookF,
  UilInstagram,
  UilLinkedinAlt,
  UilBookOpen,
  UilGithubAlt,
  UilEnvelopeShare,
  UilArrowGrowth,
  UilMoon,
  UilSun,
  UilApps,
};

export class UniconIconProvider implements IconProvider {
  createIconRegistry(configs: IconConfig[]): IconRegistry {
    const registry: IconRegistry = {};

    configs.forEach((iconInfo) => {
      const nameIcon = iconInfo.iconName;
      if (!nameIcon) return;

      const classIcon = iconInfo.propsIcon?.className || '';
      const key = `${nameIcon}.${classIcon}`;
      const iconComponent = iconLibrary[nameIcon];
      if (!iconComponent) return;

      const props = iconInfo.propsIcon || {};
      const elementProps: Record<string, unknown> = { ...props };
      if (iconInfo.iconSize) elementProps.size = iconInfo.iconSize;
      if (iconInfo.iconColor) elementProps.color = iconInfo.iconColor;

      registry[key] = React.createElement(iconComponent, elementProps as Record<string, string>);
    });

    return registry;
  }

  createIconArray(configs: IconConfig[]): React.ReactElement[] {
    const elements: React.ReactElement[] = [];

    configs.forEach((iconInfo) => {
      if (!iconInfo.iconName) return;

      const iconComponent = iconLibrary[iconInfo.iconName];
      if (!iconComponent) return;

      const props = iconInfo.propsIcon || {};
      const elementProps: Record<string, unknown> = { ...props };
      if (iconInfo.iconSize) elementProps.size = iconInfo.iconSize;
      if (iconInfo.iconColor) elementProps.color = iconInfo.iconColor;

      elements.push(React.createElement(iconComponent, elementProps as Record<string, string>));
    });

    return elements;
  }
}
