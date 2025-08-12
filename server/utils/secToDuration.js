//helper functoin to convert total seconds to the duration format

function convertSecondsToDuration(totalSeconds){
    const hours=Math.floor(totalSeconds/3600)
    const minutes=Math.floor((totalSeconds%3600)/60)
    const seconds=Math.floor((totalSeconds%3600)%60)

    if(hours>0){
        return `${hours}h ${minutes}m`
    }
    else if(minutes>0){
        return `${minutes}m ${seconds}`
    }
    else{
        return `${seconds}s`
    }
}

module.exports={
    convertSecondsToDuration
}