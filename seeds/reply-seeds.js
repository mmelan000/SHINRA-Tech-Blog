const { Reply } = require('../models');

const replyData = [
  {
    reply_text: 'Vestibulum rutrum rutrum neque.',
    user_id: 5,
    blog_id: 90,
  },
  {
    reply_text:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    user_id: 9,
    blog_id: 97,
  },
  {
    reply_text:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
    user_id: 1,
    blog_id: 27,
  },
  {
    reply_text:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    user_id: 1,
    blog_id: 55,
  },
  {
    reply_text:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    user_id: 5,
    blog_id: 64,
  },
  {
    reply_text:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    user_id: 7,
    blog_id: 63,
  },
  {
    reply_text:
      'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',
    user_id: 6,
    blog_id: 78,
  },
  {
    reply_text:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    user_id: 8,
    blog_id: 90,
  },
  {
    reply_text: 'Vivamus vel nulla eget eros elementum pellentesque.',
    user_id: 6,
    blog_id: 78,
  },
  {
    reply_text:
      'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
    user_id: 4,
    blog_id: 46,
  },
  {
    reply_text: 'Aenean lectus. Pellentesque eget nunc.',
    user_id: 5,
    blog_id: 41,
  },
  {
    reply_text:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    user_id: 4,
    blog_id: 67,
  },
  {
    reply_text:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
    user_id: 6,
    blog_id: 89,
  },
  {
    reply_text:
      'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    user_id: 2,
    blog_id: 37,
  },
  {
    reply_text:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
    user_id: 8,
    blog_id: 43,
  },
  {
    reply_text: 'Nulla facilisi.',
    user_id: 3,
    blog_id: 96,
  },
  {
    reply_text: 'Sed accumsan felis.',
    user_id: 8,
    blog_id: 12,
  },
  {
    reply_text:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    user_id: 4,
    blog_id: 77,
  },
  {
    reply_text: 'Curabitur gravida nisi at nibh.',
    user_id: 2,
    blog_id: 82,
  },
  {
    reply_text:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    user_id: 4,
    blog_id: 16,
  },
  {
    reply_text: 'Nulla ac enim.',
    user_id: 7,
    blog_id: 87,
  },
  {
    reply_text: 'Morbi ut odio.',
    user_id: 9,
    blog_id: 15,
  },
  {
    reply_text:
      'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
    user_id: 8,
    blog_id: 31,
  },
  {
    reply_text: 'In hac habitasse platea dictumst.',
    user_id: 3,
    blog_id: 16,
  },
  {
    reply_text: 'Aliquam erat volutpat. In congue.',
    user_id: 9,
    blog_id: 49,
  },
  {
    reply_text:
      'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
    user_id: 4,
    blog_id: 46,
  },
  {
    reply_text:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    user_id: 6,
    blog_id: 8,
  },
  {
    reply_text: 'In eleifend quam a odio.',
    user_id: 9,
    blog_id: 17,
  },
  {
    reply_text: 'Vivamus tortor.',
    user_id: 2,
    blog_id: 83,
  },
  {
    reply_text: 'Etiam vel augue. Vestibulum rutrum rutrum neque.',
    user_id: 7,
    blog_id: 59,
  },
  {
    reply_text:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    user_id: 2,
    blog_id: 77,
  },
  {
    reply_text:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    user_id: 9,
    blog_id: 10,
  },
  {
    reply_text: 'Nunc nisl.',
    user_id: 8,
    blog_id: 58,
  },
  {
    reply_text: 'Ut at dolor quis odio consequat varius. Integer ac leo.',
    user_id: 6,
    blog_id: 90,
  },
  {
    reply_text:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
    user_id: 8,
    blog_id: 34,
  },
  {
    reply_text:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    user_id: 3,
    blog_id: 40,
  },
  {
    reply_text: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    user_id: 7,
    blog_id: 52,
  },
  {
    reply_text: 'Donec ut dolor.',
    user_id: 2,
    blog_id: 19,
  },
  {
    reply_text: 'Proin eu mi.',
    user_id: 6,
    blog_id: 85,
  },
  {
    reply_text:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    user_id: 6,
    blog_id: 54,
  },
  {
    reply_text:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    user_id: 8,
    blog_id: 72,
  },
  {
    reply_text:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    user_id: 9,
    blog_id: 99,
  },
  {
    reply_text:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    user_id: 3,
    blog_id: 87,
  },
  {
    reply_text: 'Praesent blandit.',
    user_id: 7,
    blog_id: 95,
  },
  {
    reply_text:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    user_id: 5,
    blog_id: 48,
  },
  {
    reply_text: 'Aenean lectus. Pellentesque eget nunc.',
    user_id: 2,
    blog_id: 26,
  },
  {
    reply_text:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    user_id: 8,
    blog_id: 1,
  },
  {
    reply_text: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    user_id: 3,
    blog_id: 1,
  },
  {
    reply_text:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    user_id: 3,
    blog_id: 32,
  },
  {
    reply_text:
      'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.',
    user_id: 4,
    blog_id: 46,
  },
  {
    reply_text:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    user_id: 2,
    blog_id: 88,
  },
  {
    reply_text:
      'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
    user_id: 7,
    blog_id: 45,
  },
  {
    reply_text:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    user_id: 9,
    blog_id: 36,
  },
  {
    reply_text:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    user_id: 2,
    blog_id: 30,
  },
  {
    reply_text:
      'Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    user_id: 3,
    blog_id: 2,
  },
  {
    reply_text: 'Aliquam erat volutpat. In congue. Etiam justo.',
    user_id: 6,
    blog_id: 84,
  },
  {
    reply_text:
      'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    user_id: 4,
    blog_id: 86,
  },
  {
    reply_text:
      'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    user_id: 1,
    blog_id: 66,
  },
  {
    reply_text: 'Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    user_id: 6,
    blog_id: 86,
  },
  {
    reply_text:
      'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    user_id: 3,
    blog_id: 57,
  },
  {
    reply_text:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    user_id: 9,
    blog_id: 50,
  },
  {
    reply_text:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    user_id: 7,
    blog_id: 3,
  },
  {
    reply_text:
      'Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    user_id: 2,
    blog_id: 1,
  },
  {
    reply_text: 'Morbi non quam nec dui luctus rutrum.',
    user_id: 7,
    blog_id: 93,
  },
  {
    reply_text:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    user_id: 6,
    blog_id: 9,
  },
  {
    reply_text: 'Etiam justo. Etiam pretium iaculis justo.',
    user_id: 7,
    blog_id: 86,
  },
  {
    reply_text: 'Quisque porta volutpat erat.',
    user_id: 2,
    blog_id: 32,
  },
  {
    reply_text:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    user_id: 6,
    blog_id: 49,
  },
  {
    reply_text: 'Nulla tellus.',
    user_id: 5,
    blog_id: 17,
  },
  {
    reply_text:
      'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
    user_id: 6,
    blog_id: 12,
  },
  {
    reply_text:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    user_id: 8,
    blog_id: 12,
  },
  {
    reply_text:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    user_id: 7,
    blog_id: 68,
  },
  {
    reply_text:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    user_id: 2,
    blog_id: 88,
  },
  {
    reply_text:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    user_id: 4,
    blog_id: 11,
  },
  {
    reply_text: 'Nulla nisl.',
    user_id: 6,
    blog_id: 81,
  },
  {
    reply_text:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    user_id: 6,
    blog_id: 75,
  },
  {
    reply_text:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    user_id: 9,
    blog_id: 35,
  },
  {
    reply_text:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    user_id: 8,
    blog_id: 75,
  },
  {
    reply_text:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
    user_id: 5,
    blog_id: 64,
  },
  {
    reply_text:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    user_id: 4,
    blog_id: 68,
  },
  {
    reply_text:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
    user_id: 7,
    blog_id: 42,
  },
  {
    reply_text:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    user_id: 3,
    blog_id: 48,
  },
  {
    reply_text: 'Aenean lectus. Pellentesque eget nunc.',
    user_id: 6,
    blog_id: 55,
  },
  {
    reply_text: 'Nullam molestie nibh in lectus.',
    user_id: 1,
    blog_id: 53,
  },
  {
    reply_text:
      'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    user_id: 6,
    blog_id: 56,
  },
  {
    reply_text: 'Curabitur at ipsum ac tellus semper interdum.',
    user_id: 4,
    blog_id: 16,
  },
  {
    reply_text:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    user_id: 9,
    blog_id: 64,
  },
  {
    reply_text:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    user_id: 4,
    blog_id: 22,
  },
  {
    reply_text:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.',
    user_id: 6,
    blog_id: 92,
  },
  {
    reply_text: 'Vestibulum ac est lacinia nisi venenatis tristique.',
    user_id: 9,
    blog_id: 75,
  },
  {
    reply_text: 'Sed ante.',
    user_id: 9,
    blog_id: 1,
  },
  {
    reply_text:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    user_id: 7,
    blog_id: 88,
  },
  {
    reply_text: 'Etiam justo. Etiam pretium iaculis justo.',
    user_id: 9,
    blog_id: 77,
  },
  {
    reply_text:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
    user_id: 4,
    blog_id: 69,
  },
  {
    reply_text:
      'Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    user_id: 2,
    blog_id: 76,
  },
  {
    reply_text:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    user_id: 9,
    blog_id: 96,
  },
  {
    reply_text: 'Maecenas tincidunt lacus at velit.',
    user_id: 8,
    blog_id: 11,
  },
  {
    reply_text:
      'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
    user_id: 9,
    blog_id: 29,
  },
  {
    reply_text: 'Nunc purus.',
    user_id: 9,
    blog_id: 90,
  },
  {
    reply_text: 'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
    user_id: 4,
    blog_id: 76,
  },
];

const seedReplies = () => Reply.bulkCreate(replyData);

module.exports = seedReplies;
