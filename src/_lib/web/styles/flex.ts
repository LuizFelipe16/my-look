
export type ThemeFlexRow = {
  centerBetween: string;
  centerStart: string;
  centerEnd: string;
  startStart: string;
  startEnd: string;
  startCenter: string;
  endEnd: string;
  endStart: string;
};

export type ThemeFlexColumn = {
  centerBetween: string;
  startBetween: string;
  centerCenter: string;
  centerStart: string;
  centerEnd: string;
  startStart: string;
  startEnd: string;
  startCenter: string;
  endEnd: string;
  endStart: string;
  endCenter: string;

  reverse: {
    centerBetween: string;
    startBetween: string;
    centerCenter: string;
    centerStart: string;
    centerEnd: string;
    startStart: string;
    startEnd: string;
    startCenter: string;
    endEnd: string;
    endStart: string;
    endCenter: string;
  }
};

type ThemeFlex = {
  flex: {
    breakLine: string;
    display: string;
  };
  centerRow: string;
  centerColumn: string;
  row: ThemeFlexRow;
  column: ThemeFlexColumn;
}

export const flex: ThemeFlex = {
  flex: {
    breakLine: `flex-wrap: wrap;`,
    display: `display: flex;`,
  },

  centerRow: `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  `,

  centerColumn: `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  `,

  row: {
    // NOTE alignJustify
    centerBetween: `
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    `,
    centerStart: `
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
    `,
    centerEnd: `
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
    `,
    startStart: `
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
    `,
    startEnd: `
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-end;
    `,
    startCenter: `
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
    `,
    endEnd: `
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: flex-end;
    `,
    endStart: `
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: flex-start;
    `,
  },

  column: {
    // NOTE alignJustify
    centerBetween: `
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    `,
    startBetween: `
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
    `,
    centerCenter: `
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `,
    centerStart: `
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    `,
    centerEnd: `
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
    `,
    startStart: `
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    `,
    startEnd: `
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;
    `,
    startCenter: `
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    `,
    endEnd: `
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;
    `,
    endStart: `
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-start;
    `,
    endCenter: `
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
    `,

    reverse: {
      centerBetween: `
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: space-between;
      `,
      startBetween: `
        display: flex;
        flex-direction: column-reverse;
        align-items: flex-start;
        justify-content: space-between;
      `,
      centerCenter: `
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
      `,
      centerStart: `
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: flex-start;
      `,
      centerEnd: `
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: flex-end;
      `,
      startStart: `
        display: flex;
        flex-direction: column-reverse;
        align-items: flex-start;
        justify-content: flex-start;
      `,
      startEnd: `
        display: flex;
        flex-direction: column-reverse;
        align-items: flex-start;
        justify-content: flex-end;
      `,
      startCenter: `
        display: flex;
        flex-direction: column-reverse;
        align-items: flex-start;
        justify-content: center;
      `,
      endEnd: `
        display: flex;
        flex-direction: column-reverse;
        align-items: flex-end;
        justify-content: flex-end;
      `,
      endStart: `
        display: flex;
        flex-direction: column-reverse;
        align-items: flex-end;
        justify-content: flex-start;
      `,
      endCenter: `
        display: flex;
        flex-direction: column-reverse;
        align-items: flex-end;
        justify-content: center;
      `,
    }
  },
}