import countComments from '../commentCount.js';

const comments = [
  {
    comment: 'This is cool!',
    creation_date: '2021-01-10',
    username: 'Nkiruka',
  },
  {
    comment: 'Great content!',
    creation_date: '2021-02-10',
    username: 'Yen',
  },
  {
    comment: 'Amazing!',
    creation_date: '2021-03-10',
    username: 'Jane',
  },
];

describe('Comment count', () => {
  const count = countComments(comments);
  test('that the number of comments is three', () => {
    expect(count).toEqual(3);
  });

  test('that the number of comments is not equal to two', () => {
    expect(count).not.toEqual(2);
  });
});
