export interface SocialLinkInfo {
  id: string;
  link: string;
  icon: string;
}

export interface SocialLinksData {
  home: SocialLinkInfo[];
  footer: SocialLinkInfo[];
}
