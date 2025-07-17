export const homeQuery = `{
  "home": *[_type == "home"][0]{
    title,
    heroVideoFull,
    heroVideo,
    heroVideoMobile,
    heroVideoPosterDesktop {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    heroVideoPosterMobile {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    introContentHeading,
    introContentText,
    introContentImages[] {
      asset-> {
        ...
      },
      vimeoVideo,
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    textTicker1Words[],
    textTicker2Words[],
    whatsOnSectionHeading,
    whatsOnSectionText,
    whatsOnSectionImage {
      asset-> {
        ...
      },
      vimeoVideo,
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    latestNewsPosts[]->,
    "latestNews": *[_type == "news"] | order(postDate desc) {
      title,
      category->{
        title,
        slug {
          current
        }
      },
      teaserImage {
        asset-> {
          ...
        },
        caption,
        alt,
        hotspot {
          x,
          y
        },
      },
      slug {
        current
      },
      postDate
    }[0...12],
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  },
  "global": *[_type == "global"][0]{
    iOsAppDownloadLink,
    androidAppDownloadLink
  },
  "policies": *[_type == "policies"] {
    title,
    slug {
      current
    }
  },
  "contact": *[_type == "contact"][0] {
    emailAddresss,
    socials[] {
      name,
      url
    }
  }
}`;

export const aboutQuery = `{
  "about": *[_type == "about"][0]{
    title,
    heroImage[] {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    introText,
    firstSectionHeading,
    firstSectionText,
    firstSectionImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    secondSectionHeading,
    secondSectionText,
    secondSectionButtonLink-> {
      slug {
        current
      }
    },
    secondSectionImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    eventCalendarSectionHeading,
    eventCalenderSectionText,
    eventCalenderSectionPdfDownload {
      asset-> {
        ...
      },
    },
    eventCalendarSectionImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    thirdSectionHeading,
    thirdSectionText,
    thirdSectionImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    crimeReductionInitiatives[] {
      title,
      teaserImage {
        asset-> {
          ...
        },
        caption,
        alt,
        hotspot {
          x,
          y
        },
      },
      excerpt,
      article-> {
        title,
        slug {
          current
        }
      }
    },
    crimeReductionButtonLink-> {
      slug {
        current
      }
    },
    ourPeopleSectionHeading,
    ourPeopleSectionText,
    ourPeopleSectionBoardOfDirectorsLink,
    ourPeopleSectionTheIinTeamLink,
    ourPeopleSectionImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    keyResourcesSectionText,
    keyResourcesDownloads[] {
      title,
      link,
      file {
        asset-> {
          ...
        },
      }
    },
    "latestNews": *[_type == "news"]{
      title,
      category->{
        title,
        slug {
          current
        }
      },
      teaserImage {
        asset-> {
          ...
        },
        caption,
        alt,
        hotspot {
          x,
          y
        },
      },
      slug {
        current
      }
    },
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  },
  "policies": *[_type == "policies"] {
    title,
    slug {
      current
    }
  },
  "contact": *[_type == "contact"][0] {
    emailAddress,
    socials[] {
      name,
      url
    }
  }
}`;

export const whatsOnQuery = `
{
  "whatsOn": *[_type == "whatsOn"][0]{
    title,
    mobileHeroImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    introText,
    offerText,
    eventText,
    imageBlocks[] {
      image {
        asset-> {
          ...
        },
        caption,
        alt,
        vimeoVideo,
        hotspot {
          x,
          y
        },
      },
      captionText
    },

    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  },

  "policies": *[_type == "policies"] {
    title,
    slug {
      current
    }
  },
  "contact": *[_type == "contact"][0] {
    emailAddress,
    socials[] {
      name,
      url
    }
  }
}`;

export const syncEventsQuery = `
{
  "syncEvent": *[_type == "syncEvent"]{
    title,
    featuredImage,
    mobileHeroImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },

    introText,
    content,
    dateTime,
    age,
    slug {
      current
    },
    buttonText,
    ticketUrl,
    address,
    showOnWebsite,
  },
}`;

export const eventsQuery = `
{
  "events": *[_type == "events"]{
    title,
    mobileHeroImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },

    introText,
    content,
    dateTime,
    age,
    slug {
      current
    },
    buttonText,
    ticketUrl,
    address,
    showOnWebsite,
  },
}`;
export const eventsSlugQuery = `{
  "current": *[_type in ["events", "syncEvent"] && slug.current == $slug][0] {
    _type, // It's useful to know which type we're dealing with
    title,
    featuredImage,
    mobileHeroImage,
    introText,
    content,
    dateTime,
    age,
    slug {
      current
    },
    buttonText,
    ticketUrl,
    address,
    showOnWebsite,
    seo {
      ...,
      shareGraphic {
        asset->
      }
    },
    // Manually selected related items
    customRelated[]->{
      _type,
      title,
      slug,
      teaserImage,
      featuredImage,
    },
    // Automatically fetched related items from 'event' type
    "relatedEvents": *[_type == "event" && slug.current != $slug && defined(slug.current)][0..2] {
      _type,
      title,
      slug,
      teaserImage,
      featuredImage,
    },
    // Automatically fetched related items from 'syncEvent' type
    "relatedSyncEvents": *[_type == "syncEvent" && slug.current != $slug && defined(slug.current)][0..2] {
      _type,
      title,
      slug,
      teaserImage,
      featuredImage,
    }
  },
  "more": *[_type == "event" || _type == "syncEvent"][0..6] {
    _type,
    title,
    teaserImage,
    featuredImage,
    slug
  },
  "policies": *[_type == "policies"] {
    title,
    slug {
      current
    }
  },
  "contact": *[_type == "contact"][0] {
    emailAddress,
    socials[] {
      name,
      url
    }
  }
}`;
export const offersQuery = `
{
  "offers": *[_type == "offers"]{
    title,
    slug {
      current
    },
    mobileHeroImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },

    introText,
    content,
    address,
    showOnWebsite,
  },
}`;
export const offersSlugQuery = `{
  "current": *[_type == "offers" && slug.current == $slug][0]{
    title,
    slug {
      current
    },
    mobileHeroImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },

    introText,
    content,
    address,
    showOnWebsite,
    seo {
      ...,
      shareGraphic {
        asset->
      }
    },
    "more": *[_type == "offers" && slug.current != $slug][0..6]{
      title,
      category->{
        title,
        slug {
          current
        }
      },
      teaserImage {
        asset-> {
          ...
        },
        caption,
        alt,
        hotspot {
          x,
          y
        },
      },
      heroImage {
        asset-> {
          ...
        },
        caption,
        alt,
        hotspot {
          x,
          y
        },
      },
      slug {
        current
      },
      seo {
        ...,
        shareGraphic {
          asset->
        }
      }
    },
    customRelated[]->, 
    "related": *[_type == "offers" && slug.current != $slug][0..2]{
      title,
      category->{
        title,
        slug {
          current
        }
      },
      teaserImage {
        asset-> {
          ...
        },
        caption,
        alt,
        hotspot {
          x,
          y
        },
      },
      heroImage {
        asset-> {
          ...
        },
        caption,
        alt,
        hotspot {
          x,
          y
        },
      },
      slug {
        current
      },
      seo {
        ...,
        shareGraphic {
          asset->
        }
      }
    }
  },
  "policies": *[_type == "policies"] {
    title,
    slug {
      current
    }
  },
  "contact": *[_type == "contact"][0] {
    emailAddress,
    socials[] {
      name,
      url
    }
  }
}`;
export const contactQuery = `{
  "contact": *[_type == "contact"][0]{
    emailAddresss,
    formIntroText,
    title,
    socials[] {
      name,
      url
    },
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  },
  "policies": *[_type == "policies"] {
    title,
    slug {
      current
    }
  }
}`;

export const newsQuery = `{
  "newsLanding": *[_type == "newsLanding"][0]{
    title,
    heroText,
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  },
  "news": *[_type == "news"] | order(orderRank asc){
    title,
    orderRank,
    category->{
      title,
      orderRank, 
      slug {
        current
      }
    },
    teaserImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    heroImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    slug {
      current
    },
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  },
  "policies": *[_type == "policies"] {
    title,
    slug {
      current
    }
  },
  "contact": *[_type == "contact"][0] {
    emailAddress,
    socials[] {
      name,
      url
    }
  },
  "cats": *[_type == "categories"] | order(orderRank asc) {
    title,
    orderRank,
    slug {
      current
    }
  }
}`;

export const catQuery = `{
  "cat": *[_type == "categories" && slug.current == $slug][0]{
    title,
    heroText,
    slug {
      current
    },
    "cats": *[_type == "categories"]{
      title,
      slug {
        current
      }
    },
    "news": *[_type == "news" && category->slug.current == $slug]{
      title,
      category->{
        title,
        slug {
          current
        }
      },
      teaserImage {
        asset-> {
          ...
        },
        caption,
        alt,
        hotspot {
          x,
          y
        },
      },
      heroImage {
        asset-> {
          ...
        },
        caption,
        alt,
        hotspot {
          x,
          y
        },
      },
      slug {
        current
      },
      seo {
        ...,
        shareGraphic {
          asset->
        }
      }
    }
  },
  "policies": *[_type == "policies"] {
    title,
    slug {
      current
    }
  },
  "contact": *[_type == "contact"][0] {
    emailAddress,
    socials[] {
      name,
      url
    }
  }
}`;

export const newsSlugQuery = `{
  "current": *[_type == "news" && slug.current == $slug][0]{
    title,
    introText,
    postDate,
    category->{
      title,
      slug {
        current
      }
    },
    content[] {
      ...,
      customLink {
        internalLink->{
          _type,
          title,
          slug {
            current
          }
        },
        externalLink,
        external
      },
      embed {
        ...
      },
      markDefs[]{
        ...,
        _type == "internalLink" => {
          "slug": @.reference->slug,
          "type": @.reference->_type,
          "title": @.reference->title
        }
      },
      image{
        asset-> {
          ...
        },
        wrapText,
        customLink {
          internalLink->{
            slug {
              current
            }
          },
          externalLink,
          external
        },
        caption,
        alt,
        hotspot {
          x,
          y
        },
      }
    },
    heroImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    slug {
      current
    },
    seo {
      ...,
      shareGraphic {
        asset->
      }
    },
    "more": *[_type == "news" && slug.current != $slug][0..6]{
      title,
      category->{
        title,
        slug {
          current
        }
      },
      teaserImage {
        asset-> {
          ...
        },
        caption,
        alt,
        hotspot {
          x,
          y
        },
      },
      heroImage {
        asset-> {
          ...
        },
        caption,
        alt,
        hotspot {
          x,
          y
        },
      },
      slug {
        current
      },
      seo {
        ...,
        shareGraphic {
          asset->
        }
      }
    },
    customRelated[]->, 
    "related": *[_type == "news" && slug.current != $slug][0..2]{
      title,
      category->{
        title,
        slug {
          current
        }
      },
      teaserImage {
        asset-> {
          ...
        },
        caption,
        alt,
        hotspot {
          x,
          y
        },
      },
      heroImage {
        asset-> {
          ...
        },
        caption,
        alt,
        hotspot {
          x,
          y
        },
      },
      slug {
        current
      },
      seo {
        ...,
        shareGraphic {
          asset->
        }
      }
    }
  },
  "policies": *[_type == "policies"] {
    title,
    slug {
      current
    }
  },
  "contact": *[_type == "contact"][0] {
    emailAddress,
    socials[] {
      name,
      url
    }
  }
}`;

export const policiesQuery = `{
  "policies": *[_type == "policies"]{
    title,
    slug {
      current
    },
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  }
}`;

export const policiesSlugQuery = `{
  "current": *[_type == "policies" && slug.current == $slug][0]{
    title,
    slug {
      current
    },
    content,
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  },
  "policies": *[_type == "policies"] {
    title,
    slug {
      current
    }
  },
  "contact": *[_type == "contact"][0] {
    emailAddress,
    socials[] {
      name,
      url
    }
  }
}`;
