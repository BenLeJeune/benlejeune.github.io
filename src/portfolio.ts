//THIS IS THE PROJECTS IN THE WEBSITE PORTFOLIO

export type Project = {
    title:string,
    subtitle:string,
    coverURL: string,
    color: "red" | "purple" | "black",
    facing: "left" | "right",
    height: 1 | 2 | 3,
    multiplier:number,
    items: {
        [id:string]: {
            imageURL:string
            caption:string
        }
    }
}

export const MyPortfolio:{[id:string]:Project} = {
    "fivepines": {
        title: "Five Pines",
        subtitle: "Logo and Website Design",
        coverURL: "/assets/fivepines/fivepinescover.png",
        color: "black",
        facing: "left",
        height: 3,
        multiplier: 0.8,
        items: {
            "0": {
                imageURL: "/assets/fivepines/fivepinescover.png",
                caption: "I worked with Five Pines LTD to create a website and logo."
            },
            "1": {
                imageURL: "/assets/personal-logo/personal-logo-cover.png",
                caption: "I wanted a way to make myself stand out."
            },
            "2": {
                imageURL: "/assets/personal-logo/personal-logo-cover.png",
                caption: "I wanted a way to make myself stand out."
            }
        }
    },
    "personal": {
        title: "Personal Brand",
        subtitle: "Logo and Website Design",
        coverURL: "/assets/personal-logo/personal-logo-cover.png",
        color: "red",
        facing: "right",
        height: 1,
        multiplier: 0.6,
        items: {
            "0": {
                imageURL: "/assets/personal-logo/personal-logo-cover.png",
                caption: "I wanted a way to make myself stand out."
            },
            "1": {
                imageURL: "/assets/personal-logo/personal-logo-cover.png",
                caption: "I wanted a way to make myself stand out."
            }
        }
    }

}
