export default function Category() {
  return (
    <select
      name="menu"
      required
      onChange={(e) => console.log(e.target.value)}
      className="mx-auto w-[calc(100%-100px)] sm:w-[calc(100%-200px)] border-r-8 border-transparent rounded-lg bg-form p-3"
    >
      <option value="붕어빵">붕어빵</option>
      <option value="어묵">어묵</option>
      <option value="고구마">고구마</option>
      <option value="호떡">호떡</option>
      <option value="타코야끼">타코야끼</option>
      <option value="찐빵">찐빵</option>
      <option value="떡볶이">떡볶이</option>
      <option value="와플">와플</option>
      <option value="토스트">토스트</option>
      <option value="통닭">통닭</option>
      <option value="풀빵">풀빵</option>
      <option value="계란빵">계란빵</option>
      <option value="땅콩빵">땅콩빵</option>
    </select>
  );
}
