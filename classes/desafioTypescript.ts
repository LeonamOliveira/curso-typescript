class ResistorColor {
  private colors: string[]
  private palhetaDeColors: string[] = [
      "black",
      "brown",
      "red",
      "orang",
      "yello",
      "green",
      "blue",
      "viole",
      "grey",
      "white"
  ]

  constructor(colors?: string[]) {
      this.colors = colors!
  }
  value = (): number => 
      parseInt(`${this.palhetaDeColors.indexOf(this.colors[0])}${this.palhetaDeColors.indexOf(this.colors[1])}`)
}
