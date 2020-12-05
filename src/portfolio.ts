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
                imageURL: "/assets/fivepines/fivepines-1.png",
                caption: "Logo on white."
            },
            "2": {
                imageURL: "/assets/fivepines/fivepines-2.png",
                caption: "Dimensions of the logo."
            },
            "3": {
                imageURL: "/assets/fivepines/fivepines-3.png",
                caption: "Social media icons."
            },
            "4": {
                imageURL: "/assets/fivepines/fivepines-4.png",
                caption: "Logo & wordmark. A slab font was chosen to make the company seem less corporate and more friendly."
            },
            "5": {
                imageURL: "/assets/fivepines/fivepines-5.png",
                caption: "Block colour logos"
            },
            "6": {
                imageURL: "/assets/fivepines/fivepines-6.png",
                caption: "The logo & wordmark on different backgrounds and in different colours."
            },
            "7": {
                imageURL: "/assets/fivepines/fivepines-7.png",
                caption: "The logo gradient, plus secondary block colours."
            },
            "8": {
                imageURL: "/assets/fivepines/fivepines-8.png",
                caption: "Images sourced from Unsplash showing the company's functions."
            },
            "9": {
                imageURL: "/assets/fivepines/fivepines-9.png",
                caption: "Typography for the wordmark and website."
            },
            "10": {
                imageURL: "/assets/fivepines/fivepines-10.png",
                caption: "You can view their website at <a href='http://www.fivepines.co.uk' target='_blank' rel='noopener''>fivepines.co.uk.</a>"
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
                imageURL: "/assets/personal-logo/personal-logo-1.png",
                caption: "I thought a good place to start in digital design would be something to represent myself."
            },
            "1": {
                imageURL: "/assets/personal-logo/personal-logo-2.png",
                caption: "Social media icons. I eventually settled on the bottom left."
            },
            "2": {
                imageURL: "/assets/personal-logo/personal-logo-3.png",
                caption: "Black & White"
            },
            "3": {
                imageURL: "/assets/personal-logo/personal-logo-4.png",
                caption: "My original designs heavily featured lighter text on a dark background, but the final designs were bold on white."
            },
            "4": {
                imageURL: "/assets/personal-logo/personal-logo-5.png",
                caption: "On dark & light backgrounds. Previous designs featured lots of depth."
            },
            "5": {
                imageURL: "/assets/personal-logo/personal-logo-6.png",
                caption: "Colours used in the logo."
            },
            "6": {
                imageURL: "/assets/personal-logo/personal-logo-7.png",
                caption: "More colours."
            },
            "7": {
                imageURL: "/assets/personal-logo/personal-logo-8.png",
                caption: "I also made the website you're on right now!"
            }
        }
    }

}
