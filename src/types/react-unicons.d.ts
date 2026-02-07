declare module '@iconscout/react-unicons' {
    import { ComponentType, SVGAttributes } from 'react';

    interface UniconProps extends SVGAttributes<SVGElement> {
      size?: string | number;
      color?: string;
      className?: string;
    }

    export const UilMessage: ComponentType<UniconProps>;
    export const UilCalendarAlt: ComponentType<UniconProps>;
    export const UilDownloadAlt: ComponentType<UniconProps>;
    export const UilPhone: ComponentType<UniconProps>;
    export const UilEnvelope: ComponentType<UniconProps>;
    export const UilMapMarker: ComponentType<UniconProps>;
    export const UilEstate: ComponentType<UniconProps>;
    export const UilUser: ComponentType<UniconProps>;
    export const UilFileAlt: ComponentType<UniconProps>;
    export const UilBriefcaseAlt: ComponentType<UniconProps>;
    export const UilArrowDown: ComponentType<UniconProps>;
    export const UilArrowRight: ComponentType<UniconProps>;
    export const UilAngleRightB: ComponentType<UniconProps>;
    export const UilAngleLeftB: ComponentType<UniconProps>;
    export const UilGraduationCap: ComponentType<UniconProps>;
    export const UilCheckCircle: ComponentType<UniconProps>;
    export const UilTimes: ComponentType<UniconProps>;
    export const UilBracketsCurly: ComponentType<UniconProps>;
    export const UilStar: ComponentType<UniconProps>;
    export const UilCloudDatabaseTree: ComponentType<UniconProps>;
    export const UilWebGrid: ComponentType<UniconProps>;
    export const UilServer: ComponentType<UniconProps>;
    export const UilMouseAlt: ComponentType<UniconProps>;
    export const UilArrowUp: ComponentType<UniconProps>;
    export const UilAngleDown: ComponentType<UniconProps>;
    export const UilFacebookF: ComponentType<UniconProps>;
    export const UilInstagram: ComponentType<UniconProps>;
    export const UilLinkedinAlt: ComponentType<UniconProps>;
    export const UilBookOpen: ComponentType<UniconProps>;
    export const UilGithubAlt: ComponentType<UniconProps>;
    export const UilEnvelopeShare: ComponentType<UniconProps>;
    export const UilArrowGrowth: ComponentType<UniconProps>;
    export const UilApps: ComponentType<UniconProps>;
    export const UilMoon: ComponentType<UniconProps>;
    export const UilSun: ComponentType<UniconProps>;

    const icons: Record<string, ComponentType<UniconProps>>;
    export default icons;
  }
