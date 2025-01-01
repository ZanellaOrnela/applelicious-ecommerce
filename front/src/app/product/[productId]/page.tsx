const Detail = async({
    params,
  }: {
    params: Promise<{ productId: string }>
  }) => {
    const productId = (await params).productId
    return <div>este es el detalle del producto {productId}</div>
  }
export default Detail
