//THIS IS THE PROJECTS IN THE WEBSITE PORTFOLIO

export type Project = {
    title:string,
    subtitle:string,
    coverURL: string
    items: {
        [id:string]: {
            imageURL:string
            caption:string
        }
    }
}

export const MyPortfolio:{[id:string]:Project} = {
    "fivePines": {
        title: "Five Pines",
        subtitle: "Logo and Website Design",
        coverURL: "./assets/fivepines/fivepines-cover.png",
        items: {
            "0": {
                imageURL: "./assets/fivepines/fivepines-cover.png",
                caption: "I worked with Five Pines LTD to create a website and logo."
            }
        }
    }
}
