import { PortableTextBlock } from '@portabletext/types'

export const projects: {
  title: string;
  media: {
    type: 'image' | 'video' | 'webgl';
    url: string;
  };
  href: string;
  shortDesc: string;
  roles: string[];
  tools: string[];
  longDesc: PortableTextBlock[];
}[] = [
  {
    title: "Sample Project",
    media: {
      type: "image",
      url: "/sample-project.jpg"
    },
    href: "https://sample-project.com",
    shortDesc: "A sample project description",
    roles: ["Developer", "Designer"],
    tools: ["React", "TypeScript", "Tailwind"],
    longDesc: [
      {
        _type: "block",
        _key: "intro",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "This is a sample project description using PortableText format."
          }
        ]
      },
      {
        _type: "block",
        _key: "features",
        style: "h2",
        children: [
          {
            _type: "span",
            text: "Key Features:"
          }
        ]
      },
      {
        _type: "block",
        _key: "feature1",
        style: "normal",
        children: [
          {
            _type: "span",
            marks: ["strong"],
            text: "Feature 1:"
          },
          {
            _type: "span",
            text: " Description of feature 1"
          }
        ]
      }
    ]
  }
] 