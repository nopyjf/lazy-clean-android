package th.co.robinhood.model.promotion.promotionjaa

import com.google.gson.annotations.SerializedName


data class PromotionJaaPromotionJaa(
    var promotionList: List<PromotionList>? = null,
    var pagination: Pagination? = null,

)

data class PromotionJaaPromotionList(
    var promotionId: Int? = null,
    var promotionName: String? = null,
    var shortDescription: String? = null,
    var discount: Int? = null,
    var maximumDiscount: Int? = null,
    var discountType: String? = null,
    var discountFor: String? = null,
    var promotionLink: String? = null,
    var promotionType: String? = null,
    var iconUrl: String? = null,
    var voucherCode: String? = null,
    var promotionCode: String? = null,
    var startDate: String? = null,
    var endDate: String? = null,
    var applicationKey: String? = null,

)

data class PromotionJaaPagination(
    var currentPage: Int? = null,
    var pageSize: Int? = null,
    var hasNextPage: Boolean? = null,
    var hasPreviousPage: Boolean? = null,

)

